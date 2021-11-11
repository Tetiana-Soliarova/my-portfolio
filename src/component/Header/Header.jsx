import React from "react";
import style from './header.module.css';


function Header() {
    return (
      <header className={style.header}>
        <h1>Солярова Татьяна</h1>
      
        FRONTEND DEVELOPER
        <br />
        HTML-ВЕРСТАЛЬЩИК 
        <br />
        ПРОГРАММИСТ REACT JS 
      </header>
    );
}

export default Header;