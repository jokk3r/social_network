import React from "react";
import style from "./Header.module.scss";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={style.header}>
      <h2 className={style.header__name}>InContacts</h2>
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"./login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
