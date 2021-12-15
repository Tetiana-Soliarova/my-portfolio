import React from "react";
import style from "./contact.module.css";
/*import { NavLink } from "react-router-dom";*/
/*import { Route } from "react-router-dom";*/
import linkedin from './user-linkedin.png';
import telegram from "./telegram.svg";
import mail from "./mailbox.png";
import phone from "./telefon.png";

function Contact() {
  return (
    <div className={style.contactSection}>
      <hr className={style.line} />
      <h2 className={style.contactTitle}> Контакти </h2>
      <hr />
      <div className={style.container}>
        <div className={style.contact}>
          <a href="tel:+380991310773" className={style.imgBlock}>
            <div className={style.containerImg}>
              <img src={phone} alt="phone" className={style.imgContact}></img>
            </div>

            <p className={style.pContact}>+380991310773</p>
          </a>
          <a href="tg://resolve?domain=Solyarova" className={style.imgBlock}>
            <div className={style.containerImg}>
              <img
                src={telegram}
                alt="imageImg"
                className={style.imgContact}
              ></img>
            </div>

            <p className={style.pContact}>Send Personal Message</p>
          </a>
          <a
            href="https://www.linkedin.com/in/%D1%82%D0%B0%D0%BD%D1%8F-%D1%81%D0%BE%D0%BB%D1%8F%D1%80%D0%BE%D0%B2%D0%B0-a2a6b1200/?msgControlName=reply_to_sender&msgConversationId=2-MjI4OWJiZjUtNDY2Yy00N2VkLThlN2EtMjUwN2Q3MjAzYmVjXzAxMA%3D%3D&msgOverlay=true"
            target="blank"
            className={style.imgBlock}
          >
            <div className={style.containerImg}>
              <img
                src={linkedin}
                alt="imageImg"
                className={style.imgContact}
              ></img>
            </div>
            <p className={style.pContact}>LinkeDin</p>
          </a>

          <a href="mailto:t.s.scorpi1991@ukr.net" className={style.imgBlock}>
            <div className={style.containerImg}>
              <img src={mail} alt="imageImg" className={style.imgContact}></img>
            </div>

            <p className={style.pContact}>t.s.scorpi1991@ukr.net</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
