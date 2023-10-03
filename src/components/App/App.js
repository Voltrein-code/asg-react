/* eslint-disable import/order */
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./App.css";
import Preloader from "../Preloader/Preloader";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Helmet } from "react-helmet";

function App() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setVisible(true);
      }, 100);
    }, 3000);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Наша компания оказывает ИТ услуги в разных областях. Все от проектирования и разработки до внедрения и сопровождения"
        />
        <link rel="icon" href="../../media/logo.ico" type="any" />
        <link rel="icon" href="../../media/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="../../media/logo.png" />
        <title>АГС48</title>
      </Helmet>
      {loading ? (
        <Preloader />
      ) : (
        <div className={visible ? "app app_visible" : "app"}>
          <Header />
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
