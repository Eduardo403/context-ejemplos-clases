import React, { useState } from "react";
import { LenguasProvider } from "../context/LanguasContext";
import { ThemeProvider } from "../context/ThemeContext";

import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContex";

const MyPagesContetx = () => {
  const [auth, setAuth] = useState(false);

  const handelAuth = () => {
    if (auth) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className="my-pages">
      <ThemeProvider>
        <LenguasProvider>
          <HeaderContext auth={auth} handelAuth={handelAuth} />
          <MainContext auth={auth} />
          <FooterContext />
        </LenguasProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPagesContetx;
