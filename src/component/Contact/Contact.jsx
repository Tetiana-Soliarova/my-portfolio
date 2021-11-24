import React from "react";
import style from "./contact.module.css";
/*import { Link } from "react-router-dom";*/
/*import { Route } from "react-router-dom";*/


function Contact() {
  return (
    <div>
      <hr className={style.line} />
      <h2 className={style.contact}> Контакти </h2>
      <hr />
      <div className={style.container}></div>
    </div>
  );
}

export default Contact;
