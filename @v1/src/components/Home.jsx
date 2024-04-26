import React from "react";
import Section_2 from "./Section_2";
import Testimonials from "./Testimonials";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Client_review from "./Client_review";
import Home_Bg from "./Home_Bg";

const Home = () => {

    return (
     <>
    <Home_Bg />
    <Aboutus />
    <Section_2 />
    <Client_review />
    <Testimonials />
    <Contactus />
  </>
    );
};

export default Home;
