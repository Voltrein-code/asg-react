import { render, screen } from "@testing-library/react";
import AboutDetails from "./components/AboutDetails/AboutDetails";
import Footer from "./components/Footer/Footer";
import OrderSection from "./components/OrderSection/OrderSection";
import { aboutData } from "./utils/data";

test("renders contact block", () => {
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
  expect(screen.getByRole("link", { name: /позвонить/i })).toHaveAttribute(
    "href",
    "tel:+74742727218"
  );
  expect(screen.getByRole("link", { name: /написать/i })).toHaveAttribute(
    "href",
    "mailto:asg.48@mail.ru"
  );
});

test("renders footer legal details without duplicated contact links", () => {
  render(<Footer />);

  expect(screen.getByText(/реквизиты компании/i)).toBeInTheDocument();
  expect(screen.getByText(/инн: 4813030827/i)).toBeInTheDocument();
  expect(screen.queryByRole("link")).not.toBeInTheDocument();
});

test("renders about details cards", () => {
  render(<AboutDetails aboutData={aboutData[0]} />);

  expect(
    screen.getByRole("heading", { name: /технологии/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /платформа 1с/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/1с: бухгалтерия 8/i)).toBeInTheDocument();
});
