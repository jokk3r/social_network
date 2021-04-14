import React from "react";
import style from "./Header.module.scss";
import logo from "../img/logo.png";
const Header = () => {
  return (
    <header className={style.header}>
      <h2 className={style.header__name}>InContacts</h2>
    </header>
  );
};

export default Header;
