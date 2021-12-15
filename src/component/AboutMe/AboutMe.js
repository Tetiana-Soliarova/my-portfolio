import React from "react";
import style from './abautMe.module.css';

import aboutImg from './about.png';
import imageP from "./svg/portfolio.svg";
import Slider from "./Slide"


function AboutMe() {
    return (
      <div className={style.section}>
        <hr className={style.line} />
        <h2 className={style.about}>Обо мне</h2>
        <hr></hr>

        <div className={style.aboutMe}>
          <div>
            <img src={aboutImg} alt="imageImg" className={style.aboutImg }></img>

            <h3 className={style.aboutTitle}>Немного о себе</h3>
            <p className={style.aboutMeText}>
              Приветствую Вас на своем сайте-портфолио. Меня зовут Татьяна. Живу
              в Украине. Занимаюсь написанием сайтов с нуля. У меня полностью
              кроссбраузерная, адаптивная и валидная верстка. Для обеспечения
              выполнения требований, предъявляемых к верстке сайта в процессе
              работы над проектом я использую препроцессор SASS, Bootstrap. В
              конце работы осуществляется проверка отображения верстки в
              различных браузерах на разных устройствах, код проверяется
              валидатором на соответствие стандартам и устраняются выявленные
              ошибки.
            </p>
          </div>

          <div>
            <div className={style.mySkills}>
            <img src={imageP} alt="imagep" className={style.iconP}></img>
            <h3 className={style.aboutMe}>Профессиональные навыки</h3>
          </div>
            <ul>
              <li>HTML5</li>
              <li>CSS3/SASS</li>
              <li>JavaScript Es6+</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Rest API</li>
              <li>WebPack</li>
              <li>Figma</li>
              <li>VS Code</li>
              <li>GitHub</li>
              <li>Netlify</li>
              <li>Npm</li>
              <li>Bootstrap 4</li>
            </ul>
          </div>
        </div>
        <Slider />
      </div>
    );
}
export default AboutMe;