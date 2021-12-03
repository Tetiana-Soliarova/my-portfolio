import React from "react";
import style from './header.module.css';
import photo from './photo.jpg';

function Header() {
    return (
      <header className={style.header}>
        <div>
          <h1>Солярова Татьяна</h1>
        FRONTEND DEVELOPER
        <br />
        HTML-ВЕРСТАЛЬЩИК
        <br />
        ПРОГРАММИСТ REACT JS</div>
        
        <div className={style.containerPhoto}>
          <img src={photo} alt="myPhoto" className={style.myPhoto} />
        </div>
        
      </header>
    );
}

export default Header;