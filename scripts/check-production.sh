#!/usr/bin/env sh
set -eu

BASE_URL="${1:-https://asg48.ru}"

check_redirect() {
  source_url="$1"
  expected_location="$2"
  response_headers="$(curl -fsSI --max-time 20 "$source_url")"
  status_code="$(printf '%s\n' "$response_headers" | awk 'NR == 1 { print $2 }')"
  location="$(printf '%s\n' "$response_headers" | awk 'BEGIN { IGNORECASE=1 } /^location:/ { gsub("\r", ""); sub(/^[^:]+:[[:space:]]*/, ""); print; exit }')"

  case "$status_code" in
    301|308) ;;
    *)
      printf 'ОШИБКА: %s вернул %s вместо 301/308\n' "$source_url" "$status_code" >&2
      exit 1
      ;;
  esac

  if [ "$location" != "$expected_location" ]; then
    printf 'ОШИБКА: %s перенаправляет на %s вместо %s\n' "$source_url" "$location" "$expected_location" >&2
    exit 1
  fi
}

check_header() {
  header_name="$1"
  if ! printf '%s\n' "$MAIN_HEADERS" | grep -qi "^${header_name}:"; then
    printf 'ОШИБКА: отсутствует заголовок %s\n' "$header_name" >&2
    exit 1
  fi
}

check_redirect "http://asg48.ru/" "https://asg48.ru/"
check_redirect "http://www.asg48.ru/" "https://asg48.ru/"
check_redirect "https://www.asg48.ru/" "https://asg48.ru/"

MAIN_HEADERS="$(curl -fsSI --max-time 20 "$BASE_URL/")"
check_header "strict-transport-security"
check_header "content-security-policy"
check_header "x-content-type-options"
check_header "referrer-policy"
check_header "permissions-policy"

curl -fsS --max-time 20 "$BASE_URL/robots.txt" | grep -q 'Sitemap: https://asg48.ru/sitemap.xml'
curl -fsS --max-time 20 "$BASE_URL/sitemap.xml" | grep -q '<loc>https://asg48.ru/</loc>'

if ! openssl s_client -connect asg48.ru:443 -servername asg48.ru </dev/null 2>/dev/null \
  | openssl x509 -checkend 1209600 -noout; then
  printf 'ОШИБКА: сертификат истекает менее чем через 14 дней\n' >&2
  exit 1
fi

printf 'Production-проверки пройдены для %s\n' "$BASE_URL"
