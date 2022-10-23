import React, { useContext } from "react";
import LenguasContext from "../context/LanguasContext";
import ThemeContext from "../context/ThemeContext";
const HeaderContext = ({ auth, handelAuth }) => {
  const { theme, handelTheme } = useContext(ThemeContext);
  const { text, handelLenguas } = useContext(LenguasContext);

  return (
    <>
      <header className={theme}>
        <h2>{text.headerTitle}</h2>
        <select name="lenguas" onChange={handelLenguas}>
          <option value="es">Es</option>
          <option value="en">En</option>
        </select>
        <input
          type="radio"
          name="thme"
          value="ligth"
          onClick={handelTheme}
          id="ligth-context"
        />
        <label htmlFor="ligth-context">{text.headerLigth}</label>
        <input
          type="radio"
          name="thme"
          value="dark"
          onClick={handelTheme}
          id="dark-context"
        />
        <label htmlFor="dark-context">{text.headerDark}</label>
        <button onClick={handelAuth}>
          {auth ? text.buttonLogin : text.buttonLogaud}
        </button>
      </header>
    </>
  );
};

export default HeaderContext;
