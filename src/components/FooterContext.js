import React from "react";
import LenguasContext from "../context/LanguasContext";

import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

const FooterContext = () => {
  const { text } = useContext(LenguasContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <footer className={theme}>
        &copi;<small>{text.fotter}</small>
      </footer>
    </>
  );
};

export default FooterContext;
