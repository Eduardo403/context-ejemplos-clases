import React from "react";
const Header = ({
  theme,
  handelTheme,
  text,
  handelLenguas,
  auth,
  handelAuth,
}) => {
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
          id="ligth"
        />
        <label htmlFor="ligth">{text.headerLigth}</label>
        <input
          type="radio"
          name="thme"
          value="dark"
          onClick={handelTheme}
          id="dark"
        />
        <label htmlFor="dark">{text.headerDark}</label>
        <button onClick={handelAuth}>
          {auth ? text.buttonLogin : text.buttonLogaud}
        </button>
      </header>
    </>
  );
};

export default Header;
