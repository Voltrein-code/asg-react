import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./components/App/App";
import AboutDetails from "./components/AboutDetails/AboutDetails";
import Footer from "./components/Footer/Footer";
import OrderSection from "./components/OrderSection/OrderSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import { aboutData } from "./utils/data";

beforeEach(() => {
  const modalRoot = document.createElement("div");
  modalRoot.id = "modals";
  document.body.append(modalRoot);
});

afterEach(() => {
  document.getElementById("modals")?.remove();
});

test("renders contact block without a personal-data form", () => {
  render(<OrderSection />);

  expect(
    screen.getByRole("heading", { name: /оставайтесь на связи/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /\+7 \(4742\) 72-72-18/i })
  ).toHaveAttribute("href", "tel:+74742727218");
  expect(
    screen.getByRole("link", { name: /asg\.48@mail\.ru/i })
  ).toHaveAttribute("href", "mailto:asg.48@mail.ru");
  expect(screen.queryByRole("form")).not.toBeInTheDocument();
  expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
});

test("renders centralized legal details and footer navigation", () => {
  render(<Footer />);

  expect(
    screen.getByText(/общество с ограниченной ответственностью «асг48»/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/инн: 4813030827/i)).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /сведения об ит-деятельности/i })
  ).toHaveAttribute("href", "#it-accreditation");
  expect(
    screen.getByRole("link", {
      name: /политика обработки персональных данных/i,
    })
  ).toHaveAttribute("href", "#privacy");
  expect(
    screen.queryByText(/необходимость дальнейшего публичного размещения/i)
  ).not.toBeInTheDocument();
});

test("renders technologies in existing detail content", () => {
  render(<AboutDetails aboutData={aboutData[0]} />);

  expect(
    screen.getByRole("heading", { name: /технологии/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /платформа 1с/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/1с: бухгалтерия 8/i)).toBeInTheDocument();
});

test("keeps required accreditation content in the main page DOM", () => {
  const { container } = render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /сведения об ит-деятельности и организации/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getAllByText(/общество с ограниченной ответственностью «асг48»/i)
      .length
  ).toBeGreaterThan(0);
  expect(screen.getByText(/код 3\.01/i)).toBeInTheDocument();
  expect(screen.getByText(/код 1\.05/i)).toBeInTheDocument();
  expect(
    screen.getByText(/разработк[аи].*сайтов и отдельных страниц сайтов/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/создание структуры и состава баз данных/i)
  ).toBeInTheDocument();
  expect(screen.getAllByText(/от 2 000 ₽\/час/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/от 1 500 ₽\/час/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/минимальная стоимость:/i).length).toBe(6);
  expect(
    screen.getByText(/дата последнего обновления сведений: 15 мая 2026 года/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/отсутствие применимых исключительных прав/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/отсутствие собственного по в едином реестре/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/не является оператором фискальных данных/i)
  ).toBeInTheDocument();
  expect(
    screen.getAllByText(/не является официальным партнёром 1с/i).length
  ).toBeGreaterThan(0);
  const privacySection = container.querySelector("#privacy");
  expect(privacySection).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /политика обработки персональных данных посетителей сайта/i,
    })
  ).toBeInTheDocument();
  expect(privacySection).toHaveTextContent(
    /хостинг-провайдером является reg\.ru/i
  );
  expect(privacySection).toHaveTextContent(/не более 30 календарных дней/i);
  expect(privacySection).toHaveTextContent(
    /сайт не использует cookies, системы веб-аналитики/i
  );
  expect(container.querySelector("form")).not.toBeInTheDocument();

  const hashLinks = Array.from(container.querySelectorAll('a[href^="#"]'));
  hashLinks.forEach((link) => {
    expect(
      container.querySelector(link.getAttribute("href"))
    ).toBeInTheDocument();
  });
});

test("product modal is labelled and returns focus on Escape", async () => {
  render(<ProductsSection />);
  const trigger = screen.getAllByRole("button", { name: /подробнее/i })[0];

  trigger.focus();
  fireEvent.click(trigger);

  const dialog = screen.getByRole("dialog", {
    name: /услуга: разработка и внедрение/i,
  });
  expect(dialog).toHaveAttribute("aria-modal", "true");
  expect(dialog).toHaveFocus();

  fireEvent.keyDown(document, { key: "Escape" });

  await waitFor(() =>
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  );
  expect(trigger).toHaveFocus();
});
