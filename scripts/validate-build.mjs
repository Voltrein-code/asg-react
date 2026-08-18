import { readdir, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const buildDirectory = path.resolve("build");

const readBuildFile = (filePath) =>
  readFile(path.join(buildDirectory, filePath), "utf8");

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(fullPath) : fullPath;
    })
  );

  return files.flat();
};

const [indexHtml, robots, sitemap, hostingConfig, files] =
  await Promise.all([
    readBuildFile("index.html"),
    readBuildFile("robots.txt"),
    readBuildFile("sitemap.xml"),
    readBuildFile(".htaccess"),
    walk(buildDirectory),
  ]);

const javascript = (
  await Promise.all(
    files
      .filter((filePath) => filePath.endsWith(".js"))
      .map((filePath) => readFile(filePath, "utf8"))
  )
).join("\n");

const htmlFiles = files.filter((filePath) => filePath.endsWith(".html"));
const sitemapLocations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => match[1]
);
const jsonLd = indexHtml.match(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
)?.[1];
const jsonLdHash = jsonLd
  ? createHash("sha256").update(jsonLd).digest("base64")
  : null;

assert(htmlFiles.length === 1, "Сборка должна содержать только index.html");
assert(
  sitemapLocations.length === 1 && sitemapLocations[0] === "https://asg48.ru/",
  "sitemap.xml должен содержать только каноническую главную страницу"
);
assert(!sitemap.includes("#"), "Якоря запрещены в sitemap.xml");
assert(
  robots.includes("Sitemap: https://asg48.ru/sitemap.xml"),
  "robots.txt не содержит ссылку на sitemap.xml"
);
assert(
  /<link\s+rel="canonical"\s+href="https:\/\/asg48\.ru\/"\s*\/?>/.test(
    indexHtml
  ),
  "В сборке отсутствует canonical"
);
assert(indexHtml.includes("application/ld+json"), "Отсутствует JSON-LD");
assert(
  jsonLdHash &&
    indexHtml.includes(`'sha256-${jsonLdHash}'`) &&
    hostingConfig.includes(`'sha256-${jsonLdHash}'`),
  "CSP не содержит актуальный SHA-256 встроенного JSON-LD"
);
assert(
  javascript.includes("it-accreditation") &&
    javascript.includes("privacy") &&
    javascript.includes("ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «АСГ48»") &&
    javascript.includes("Хостинг-провайдером является"),
  "Обязательная секция, политика или полное наименование отсутствуют в JS-сборке"
);
assert(
  hostingConfig.includes("https://asg48.ru%{REQUEST_URI}") &&
    hostingConfig.includes('Header always set Content-Security-Policy') &&
    hostingConfig.includes('Header always set X-Content-Type-Options') &&
    hostingConfig.includes('Header always set Referrer-Policy') &&
    hostingConfig.includes('Header always set Permissions-Policy'),
  ".htaccess не содержит канонический редирект или защитные заголовки"
);
assert(
  files.every((filePath) => !filePath.endsWith(".map")),
  "Production source map не должны публиковаться"
);

process.stdout.write("Статическая проверка production-сборки пройдена.\n");
