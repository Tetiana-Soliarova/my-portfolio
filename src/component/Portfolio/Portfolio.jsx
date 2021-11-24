import React from "react";
import style from "./portfolio.module.css";
/*import { Link } from "react-router-dom";*/
/*import { Route } from "react-router-dom";*/
import webStudio from './web_studio.jpg';
import phonebook from './phonebook.jpg';
import movies from './movies.jpg';
import landing from './landing_page.jpg';
import imageFinder from './image_finder.jpg';
import drug from '../Portfolio/center.jpg';



function Portfolio() {
    return (
      <div className={style.fon}>
        <hr className={style.line} />
        <h2 className={style.portfolio}> Портфоліо </h2>
        <hr />
        <div className={style.container}>
          <div className={style.row}>
            <a
              href="https://tetiana-soliarova.github.io/goit-markup-hw-08/"
              target="blank"
            >
              <img className={style.blok} src={webStudio} alt="imageImg"></img>
            </a>
            <div className={style.content}>
              <h1>Web Studio</h1>
              <p>(SCSS, HTML, Js)</p>
            </div>
          </div>
          <div className={style.row}>
            <a href="https://phonebook-hooks.netlify.app/" target="blank">
              <img src={phonebook} alt="imageImg" className={style.blok}></img>{" "}
            </a>
            <div className={style.content}>
              <h1>Phonebook</h1>
              <p>(CSS, HTML, React Js)</p>
            </div>
          </div>
          <div className={style.row}>
            <a href="https://ts-skorpi-netlify.netlify.app/" target="blank">
              <img src={movies} alt="imageImg" className={style.blok}></img>
            </a>
            <div className={style.content}>
              <h1>Movies API</h1>
              <p>(SCSS, HTML, React Js)</p>
            </div>
          </div>
          <div className={style.row}>
            <a
              href="https://tetiana-soliarova.github.io/Boc-o-boc/"
              target="blank"
            >
              <img src={landing} alt="imageImg" className={style.blok}></img>
            </a>
            <div className={style.content}>
              <h1>Landing page</h1>
              <p>(Bootstrap 4, HTML)</p>
            </div>
          </div>
          <div className={style.row}>
            <a
              href="https://tetiana-soliarova.github.io/goit-react-hw-3-image-finder/"
              target="blank"
            >
              <img
                src={imageFinder}
                alt="imageImg"
                className={style.blok}
              ></img>
            </a>
            <div className={style.content}>
              <h1>Image-finder</h1>
              <p>(SCSS, HTML, React Js)</p>
            </div>
          </div>
          <div className={style.row}>
            <a
              href="https://tetiana-soliarova.github.io/Drug-treatment-center/"
              target="blank"
            >
              <img src={drug} alt="imageImg" className={style.blok}></img>
            </a>
            <div className={style.content}>
              <h1>Drug treatment center</h1>
              <p>(SCSS, HTML)</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Portfolio;
