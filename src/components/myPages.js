import React, { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
let initeTheme = "lgiht";
let initeLenguas = "es";
const traslation = {
  es: {
    headerTitle: "My pages sin contex api",
    headerLigth: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "iniciar sesion",
    buttonLogaud: "Cerrar sesion",
    mainWelcoment: "Bienbenid@ invitad@",
    mainUser: "Hola usuari@",
    fotter: "Clases de context",
  },
  en: {
    headerTitle: "My aplication withoud context api",
    headerLigth: "ligth",
    headerDark: "dark",
    buttonLogin: "login",
    buttonLogaud: "logaut",
    mainWelcoment: "Welcoment Guest ",
    mainUser: "Hello User",
    fotter: "Class widt Context",
  },
};

const MyPages = () => {
  const [theme, setTheme] = useState(initeTheme);
  const [lenguas, setlenguas] = useState(initeLenguas);
  const [text, setText] = useState(traslation[lenguas]);
  const [auth, setAuth] = useState(false);
  const handelTheme = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "ligth") {
      setTheme("ligth");
    } else {
      setTheme("dark");
    }
  };
  const handelAuth = () => {
    if (auth) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };

  const handelLenguas = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "es") {
      setlenguas("es");
      setText(traslation.es);
    } else {
      setlenguas("en");
      setText(traslation.en);
    }
  };
  return (
    <div className="my-pages">
      <Header
        theme={theme}
        handelLenguas={handelLenguas}
        handelTheme={handelTheme}
        text={text}
        auth={auth}
        handelAuth={handelAuth}
      />
      <Main theme={theme} text={text} auth={auth} />
      <Footer theme={theme} text={text} />
    </div>
  );
};

export default MyPages;
