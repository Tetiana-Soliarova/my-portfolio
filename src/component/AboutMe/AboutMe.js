import React from "react";
import style from './abautMe.module.css';
import aboutImg from './about.png';
import imageP from "./svg/portfolio.svg";
import imageSv from "./svg/figma.svg";

import imageHt from "./svg/html.svg";

import imageR from "./svg/react.svg";

import imageN from "./svg/npm.svg";
import imageW from "./svg/webpack.svg";
import imageJs from "./svg/js.svg";
import imageS from "./svg/scss_i.svg";
/*import ReactSVG from "react-svg";*/


function AboutMe() {
    return (
      <div className={style.section}>
        <hr className={style.line} />
        <h2 className={style.about}>Обо мне</h2>
        <hr></hr>

        <div className={style.aboutMe}>
          <div>
           
              <img
                src={aboutImg}
                alt="imageImg"
                className={style.aboutImg}
              ></img>
           
            <h3 className={style.aboutTitle}>Немного о себе</h3>
            <p className={style.aboutMeText}>
              Здравствуйте, меня зовут Солярова Татьяна. Занимаюсь написанием
              сайтов с нуля. Верстаю адаптивную верстку с помощью CSS/SASS,
              таким образом сайт получается красивым !
            </p>
          </div>

          <div>
            <img src={imageP} alt="imagep" className={style.iconP}></img>
            <h3 className={style.aboutMe}>Профессиональные навыки</h3>
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
            </ul>
          </div>
        </div>

        <div className={style.skill}>
          <img src={imageN} alt="figma" className={style.icon}></img>
          <img src={imageHt} alt="figma" className={style.icon}></img>
          <img src={imageW} alt="figma" className={style.icon}></img>
          <img src={imageSv} alt="figma" className={style.icon}></img>
          <img src={imageR} alt="figma" className={style.icon}></img>
          <img src={imageJs} alt="figma" className={style.icon}></img>
          <img src={imageS} alt="figma" className={style.icon}></img>
        </div>
      </div>
    );
}
export default AboutMe;