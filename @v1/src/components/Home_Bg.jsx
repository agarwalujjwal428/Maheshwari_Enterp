import React, { useState, useEffect } from "react";
import Home_Bg_carousel from "./Home_Bg_carousel";
import "../styles/Home_Bg.css";
import "animate.css";

const slides = [
  {
    image: "/src/assets/images/F_7.jpg",
    alt: "Slide 3",
    caption: "This is slide 3",
  },
  {
    image: "/src/assets/images/F_3.jpg",
    alt: "Slide 3",
    caption: "This is slide 3",
  },
  {
    image: "/src/assets/images/F_9.jpeg",
    alt: "Slide 3",
    caption: "This is slide 3",
  },
];

const Home_Bg = () => {
  const [fade, setFade] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFade(window.scrollY > 160);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowImage(true);
  }, []);

  return (
    <div className="home_bg_container">
      <Home_Bg_carousel slides={slides} />
      {showImage && (
        <>
          <div
            className={`home_bg_pic animate__animated ${
              fade ? "animate__zoomOut" : "animate__zoomIn"
            } animate__duration-6s`}
          >
            <img
              src="/src/assets/images/E_B2.png"
              style={{ height: "400px", width: "400px" }}
              alt="Background"
            />
          </div>
          <div
            className={`home_bg_first animate__animated  ${
              fade ? "animate__zoomOut" : "animate__zoomIn"
            } animate__duration-6s`}
          >
            Creating Quality Construction
          </div>
        </>
      )}
    </div>
  );
};

export default Home_Bg;
