import { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Header from "../Header/Header";
import "./App.css";
import Preloader from "../Preloader/Preloader";
import Main from "../Main/Main";

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
      {loading ? (
        <Preloader />
      ) : (
        <div className={visible ? "app app_visible" : "app"}>
          <Header />
          <Main />
        </div>
      )}
    </>
  );
}

export default App;
