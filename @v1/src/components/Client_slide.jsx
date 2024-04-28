import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Client_slide = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrev = () => {
    setSlideIndex(Math.max(slideIndex - 2, 0));
  };

  const handleNext = () => {
    setSlideIndex(Math.min(slideIndex + 2, slides.length - 2));
  };

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        style={{ transform: `translateX(-${slideIndex * 50}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide-client" key={index} style={{ width: "50%" }}>
            <div className="slide-text" style={{height:"250px"}}>{slide.text}</div>
            <div className="slide-designation text-right">
              {slide.img === "" ? (
                <div className="slide-initials" style={{height:"73px",position:"relative",bottom:"-40px"}}><span>{slide.initials}</span></div>
              ) : (
                <img src={slide.img} alt={slide.name} style={{ height: "70px", width: "70px", margin: "3px" }} />
              )}
            </div>
            <div className="slide-name text-right">-{slide.name}</div>
          </div>
        ))}
      </div>
      <button className="client-slide-btn prev" onClick={handlePrev}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button className="client-slide-btn next" onClick={handleNext}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default Client_slide;
