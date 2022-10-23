import { createContext, useState } from "react";
let initeLenguas = "es";
const traslation = {
  es: {
    headerTitle: "My pages con contex api",
    headerLigth: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "iniciar sesion",
    buttonLogaud: "Cerrar sesion",
    mainWelcoment: "Bienbenid@ invitad@",
    mainUser: "Hola usuari@",
    fotter: "Clases de context",
  },
  en: {
    headerTitle: "My aplication with context api",
    headerLigth: "ligth",
    headerDark: "dark",
    buttonLogin: "login",
    buttonLogaud: "logaut",
    mainWelcoment: "Welcoment Guest ",
    mainUser: "Hello User",
    fotter: "Class widt Context",
  },
};
const LenguasContext = createContext();

const LenguasProvider = ({ children }) => {
  const [lenguas, setlenguas] = useState(initeLenguas);
  const [text, setText] = useState(traslation[lenguas]);

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
  const data = { handelLenguas, text };

  return (
    <LenguasContext.Provider value={data}>{children}</LenguasContext.Provider>
  );
};
export { LenguasProvider };

export default LenguasContext;
