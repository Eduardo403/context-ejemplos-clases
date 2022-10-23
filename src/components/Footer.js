import React from "react";

const Footer = ({ theme, text }) => {
  return (
    <>
      <footer className={theme}>
        &copi;<small>{text.fotter}</small>
      </footer>
    </>
  );
};

export default Footer;
