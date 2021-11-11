import React from "react";
import style from './abautMe.module.css'


function AboutMe() {
    return (
      <div>
        <h2 className={style.about}>Обо мне</h2>
        <hr></hr>
        <div>
          <div>
            <h3 className={style.aboutMe}>Немного о себе</h3>
            <p className={style.aboutMeText}>
              Здравствуйте, меня зовут Солярова Татьяна. Занимаюсь написанием
              сайтов с нуля. Верстаю адаптивную верстку с помощью CSS/SASS,
              таким образом сайт получается красивым!
            </p>
          </div>
          <div>
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
      </div>
    );
}
export default AboutMe;