import { createContext, useState } from "react";
let initeTheme = "lgiht";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initeTheme);
  const handelTheme = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "ligth") {
      setTheme("ligth");
    } else {
      setTheme("dark");
    }
  };
  const data = { theme, handelTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
