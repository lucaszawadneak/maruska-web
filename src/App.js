import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { isAndroid, isIOS, isMobile } from "react-device-detect";

import "react-toastify/dist/ReactToastify.css";

import intl from "react-intl-universal";
import { Container, ScreenHolder } from "./styles/app";

function App() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const returnable = setMobile;

    if (returnable) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const android = isAndroid;
    const iOS = isIOS;

    if (android) {
    } else if (iOS) {
      toast.info(`😥 ${intl.get("error")}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [mobile]);

  const handleAndroid = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.lcdev.maruska";
  };

  return (
    <Container imageUrl={require("./assets/img/background.png")}>
      <ScreenHolder>
        <ToastContainer />
        <img src={require("./assets/img/phones.png")} alt="phones" />
        <div>
          <img src={require("./assets/img/logo.png")} alt="logo" />
          <h1>{intl.get("title")}</h1>
          <ul>
            <li>{intl.get("vaccination")}</li>
            <li>{intl.get("medicine")}</li>
            <li>{intl.get("weight")}</li>
            <li>{intl.get("health")}</li>
            <li>{intl.get("other")}</li>
          </ul>
          <a href="https://play.google.com/store/apps/details?id=com.lcdev.maruska">
            <img src={require("./assets/img/play.png")} alt="logo" />
          </a>
        </div>
      </ScreenHolder>
    </Container>
  );
}

export default App;
