import React from "react";
import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import Profile from "./../img/Profile.png";
import Feed from "./../img/Document.png";
import Messages from "./../img/Chat.png";
import Users from "./../img/User2.png";
import Music from "./../img/Frame 6.png";
import Settings from "./../img/Filter.png";
// import {
//   FaHome,
//   FaEnvelope,
//   FaMusic,
//   FaNewspaper,
//   FaCogs,
// } from "react-icons/fa";

function Nav() {
  return (
    <nav className={style.nav}>
      <div className={style.nav__item}>
        <NavLink to="/profile" activeClassName={style.activeLink}>
          <div className={style.content}>
            <img src={Profile} alt="" />
            <p className={style.title}>My profile</p>
          </div>
        </NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to="/feed" activeClassName={style.activeLink}>
          <div className={style.content}>
            <img src={Feed} alt="" />
            <p className={style.title}>Feed</p>
          </div>
        </NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to="/dialogs" activeClassName={style.activeLink}>
          <div className={style.content}>
            <img src={Messages} alt="" />
            <p className={style.title}> Messages</p>
          </div>
        </NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to="/users" activeClassName={style.activeLink}>
          <div className={style.content}>
            <img src={Users} alt="" />
            <p className={style.title}>Users</p>
          </div>
        </NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to="/music" activeClassName={style.activeLink}>
          <div className={style.content}>
            <img src={Music} alt="" />
            <p className={style.title}> Music</p>
          </div>
        </NavLink>
      </div>
      <div className={style.nav__item}>
        <NavLink to="/settings" activeClassName={style.activeLink}>
          <div className={style.content}>
            <img src={Settings} alt="" />
            <p className={style.title}>Settings</p>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
