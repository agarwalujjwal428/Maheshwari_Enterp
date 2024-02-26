import React, { useState, useEffect } from "react";

const Home_Bg_carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="home_carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${currentSlide === index ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.alt} />
          {/* <div className="caption">{slide.caption}</div> */}
        </div>
      ))}
      {/* <div className="indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Home_Bg_carousel;
