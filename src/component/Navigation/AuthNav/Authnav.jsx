import React from "react";
import { NavLink } from "react-router-dom";

function AuthNav() {
  return (
    <div>
      <ul>
        <NavLink to="/home">
          <h2>Главная</h2>
        </NavLink>
        <NavLink to="/about-me">
          <h2>Обо мене</h2>
        </NavLink>
        <NavLink to="/portfolio">
          <h2>Портфолио</h2>
        </NavLink>

        <NavLink to="/contacts">
          <h2>Контакти</h2>
        </NavLink>
      </ul>
    </div>
  );
}
export default AuthNav;