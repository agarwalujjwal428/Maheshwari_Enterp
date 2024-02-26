import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you need
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you need

const Client_slide = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrev = () => {
    setSlideIndex(Math.max(slideIndex - 2, 0));
  };

  const handleNext = () => {
    setSlideIndex(Math.min(slideIndex + 2, slides.length - 2));
  };

  return (
    <>
      <div className="carousel">
        <div
          className="carousel-container"
          style={{ transform: `translateX(-${slideIndex * (100 / 2)}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide-client" key={index}>
              <div className="slide-text">{slide.text}</div>
              <div className="slide-name text-right">{slide.name}</div>
              <div className="slide-designation text-right">
                {slide.designation}
              </div>
            </div>
          ))}
        </div>
        <button className="client-slide-btn prev" onClick={handlePrev}>
        <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="client-slide-btn next" onClick={handleNext}>
          <FontAwesomeIcon icon={faAngleRight} /> {/* Use the imported icon */}
        </button>
      </div>
    </>
  );
};

export default Client_slide;
