import React from "react";
import Home_Bg_carousel from "./Home_Bg_carousel";
import "../styles/Home_Bg.css";

const Home_Bg = () => {
  const slides = [
    {
      image: "/src/assets/images/pic1.jpg",
      alt: "Slide 1",
      caption: "This is slide 1",
    },
    {
      image: "/src/assets/images/pic2.jpg",
      alt: "Slide 2",
      caption: "This is slide 2",
    },
    // {
    //   image: "/src/assets/images/pic3.webp",
    //   alt: "Slide 3",
    //   caption: "This is slide 3",
    // },
  ];

  return (
    <div className="home_bg_container">
      <Home_Bg_carousel slides={slides} />
      <div className="home_bg_header">Maheshwari Enterprises</div>
    </div>
  );
};

export default Home_Bg;
