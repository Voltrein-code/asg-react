import { useEffect } from "react";
import Header from "../Header/Header";
import "./App.css";
import "../Button/Button.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  useEffect(() => {
    const focusHashTarget = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id ? document.getElementById(id) : null;

      if (!target) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      window.requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
        target.focus({ preventScroll: true });
      });
    };

    focusHashTarget();
    window.addEventListener("hashchange", focusHashTarget);

    return () => window.removeEventListener("hashchange", focusHashTarget);
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
