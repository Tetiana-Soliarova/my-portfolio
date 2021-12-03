import React, {useState, useEffect} from "react"
import imageSv from "./svg/figma.svg";
import imageHt from "./svg/html.svg";
import imageR from "./svg/react.svg";
import imageN from "./svg/npm.svg";
import imageW from "./svg/webpack.svg";
import imageJs from "./svg/js.svg";
import imageS from "./svg/scss_i.svg";
import  "./slider.css";


const img = [
  <img key={imageSv} src={imageSv} alt="" className="img" />,
  <img key={imageHt} src={imageHt} alt="" className="img" />,
  <img key={imageR} src={imageR} alt="" className="img" />,
  <img key={imageN} src={imageN} alt="" className="img" />,
  <img key={imageW} src={imageW} alt="" className="img" />,
  <img key={imageJs} src={imageJs} alt="" className="img" />,
  <img key={imageS} src={imageS} alt="" className="img" />,
];

 function Slider() {

    
  // Индекс текущего слайда
  const [activeIndex, setActiveIndex] = useState(0);

  // Хук Effect
  useEffect(() => {
    // Запускаем интервал
    setInterval(() => {
      // Меняем состояние
      setActiveIndex((current) => {
        // Вычисляем индекс следующего слайда, который должен вывестись
        const res = current === img.length - 1 ? 0 : current + 1;
        // Возвращаем индекс
        return res;
      });
    }, 3000);
    // Выключаем интервал
    return () => clearInterval();
  }, []);

  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  // Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;
    
    return (
      <div className="slider">
        <div className="slider-img slider-img-prev" key={prevImgIndex}>
          {img[prevImgIndex]}
        </div>
        <div className="slider-img" key={activeIndex}>
          {img[activeIndex]}
        </div>
        
        <div className="slider-img slider-img-next" key={nextImgIndex}>
          {img[nextImgIndex]}
        </div>
      </div>
    );
}
export default Slider;