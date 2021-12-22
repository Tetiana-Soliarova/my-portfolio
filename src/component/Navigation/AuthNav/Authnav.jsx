import React from "react";
import { NavLink } from "react-router-dom";
import style from './AuthNav.module.css';


function AuthNav() {
  return (
    <div>
      <div className={style.authNavContainer}>
        <ul className={style.nav}>
          <NavLink to="/my-portfolio">
            <h2 className={style.authNav}>Главная</h2>
          </NavLink>
          <NavLink to="/about-me">
            <h2 className={style.authNav}>Обо мне</h2>
          </NavLink>
          <NavLink to="/portfolio">
            <h2 className={style.authNav}>Портфолио</h2>
          </NavLink>

          <NavLink to="/contacts">
            <h2 className={style.authNav}>Контакти</h2>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
export default AuthNav;