import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Client_slide = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);

  const updateSlidesToShow = () => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(2);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const handlePrev = () => {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slides.length - 1);
  };

  const handleNext = () => {
    setSlideIndex((slideIndex + slidesToShow) % slides.length);
  };

  return (
    <div className="carousel">
      <div
        className="client-carousel-container"
        style={{ transform: `translateX(-${slideIndex * (100 / slidesToShow)}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide-client" key={index} style={{ width: `${100 / slidesToShow}%` }}>
            <div className="slide-text" style={{ height: "250px" }}>
              {slide.text}
            </div>
            <div className="slide-designation text-right">
              {slide.img === "" ? (
                <div
                  className="slide-initials"
                  style={{
                    height: "73px",
                    position: "relative",
                    bottom: "-40px",
                  }}
                >
                  <span>{slide.initials}</span>
                </div>
              ) : (
                <img
                  src={slide.img}
                  alt={slide.name}
                  style={{ height: "70px", width: "70px", margin: "3px" }}
                />
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