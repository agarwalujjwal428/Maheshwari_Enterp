import React, { useState, useEffect } from "react";
import Home_Bg_carousel from "./Home_Bg_carousel";
import "../styles/Home_Bg.css";
import "animate.css";

const Home_Bg = () => {
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
    // {
    //   image: "/src/assets/images/F_8.jpg",
    //   alt: "Slide 3",
    //   caption: "This is slide 3",
    // },
    {
      image: "/src/assets/images/F_9.jpeg",
      alt: "Slide 3",
      caption: "This is slide 3",
    },
    // {
    //   image: "/src/assets/images/F_1.jpg",
    //   alt: "Slide 1",
    //   caption: "This is slide 1",
    // },
  ];

  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 160) {
        setFade(true);
        console.log(" Fade is true");
      } else {
        setFade(false);
        console.log(" Fade is false");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home_bg_container">
      <Home_Bg_carousel slides={slides} />
      <div className={`home_bg_pic ${fade ? "fadeOutRight" : ""}`}>
        <img
          src="/src/assets/images/E_B2.png"
          style={{ height: "250px", width: "250px" }}
          alt="Background"
        />
      </div>
      <div
        className={`home_bg_first animate__animated  ${
          fade ? "animate__lightSpeedOutRight" : "animate__lightSpeedInLeft"
        } animate__duration-2s`}
      >
        Creating Quality Construction
      </div>
      <div
        className={`home_bg_second animate__animated ${
          fade ? "animate__lightSpeedOutRight" : "animate__lightSpeedInLeft"
        } animate__duration-2s animate__delay-0.5s`}
      >
        Since 1990
      </div>
    </div>
  );
};

export default Home_Bg;
