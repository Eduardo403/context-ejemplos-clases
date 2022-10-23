import React, { useContext } from "react";
import LenguasContext from "../context/LanguasContext";

import ThemeContext from "../context/ThemeContext";

const MainContext = ({ auth }) => {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LenguasContext);

  return (
    <>
      <main className={theme}>
        {auth ? <h3> {text.mainWelcoment}</h3> : <h3>{text.mainUser}</h3>}

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          nesciunt sequi recusandae cum minima! Vel rem sed aliquid ea accusamus
          aspernatur magnam error quibusdam perferendis quas modi, quam possimus
          beatae.
        </p>
      </main>
    </>
  );
};

export default MainContext;
