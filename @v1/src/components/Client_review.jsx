import React from "react";
import Client_slide from "./Client_slide";
import "../styles/Client_review.css";

const Client_review = () => {
  const slides = [
    {
      text: `“Maheshwari Enterprises has been my trusted partner for waterproofing across numerous projects. Their consistent quality and meticulous attention to detail have ensured long-lasting protection against moisture damage and seepage. I highly recommend Maheshwari Enterprises to any fellow professionals seeking reliable and top-notch waterproofing services.”`,
      img: "/assets/images/Testimonials/Kamal_Khetani.jpg",
      name: "Arch. Kamal Khetani",
      initials: "Arch. KK",
    },
    {
      text: `“I built my house in Umaid Heritage in Jodhpur and Maheshwari Enterprises went above and beyond for it! They not only supplied the best KiTEC composite pipes for plumbing, but their waterproofing treatment has kept my home dry and secure. I couldn't be happier with their service and products!”`,
      img: "/assets/images/Testimonials/Kapil_Vatwani.png",
      name: "Kapil Vatwani",
      initials: "KV",
    },
    {
      text: `“After looking at many options for plumbing pipes and waterproofing solutions, we came across Maheshwari Enterprises. Their innovative composite pipes and penetrative waterproofing make them stand out from others in the market and ensure customer satisfaction.”`,
      img: "",
      name: "Y K Sharma",
      initials: "YS",
    },
    {
      text: `“I have been using KiTEC composite pipes from Maheshwari Enterprises since 1998. It has given the best results in all my projects as by using KiTEC pipes, problem of leakage and detoration of pipe vanishes. I am happy with their services and dedication to work. I highly recommend their products and services to everyone planning to build their house.”`,
      img: "/assets/images/Testimonials/Umesh_Sadayat.jpg",
      name: "Umesh Sadayat",
      initials: "US",
    },
    {
      text: `“My factory, Metallizing Equipment Company Pvt. Ltd. (MEC), has been installed with KiTEC composite pipes for all the compressor lines. The best feature that appeals to me is that the pipe comes in a single length of 200 metres, which helped overcome frictional losses and the cost of fittings in the whole project.”`,
      img: "/assets/images/Testimonials/Ankur_Modi.jpg",
      name: "Ankur Modi",
      initials: "AM",
    },
    {
      text: `“In our new unit, Maheshwari Enterprises supplied us with KiTEC composite pipes for compressor lines and NCL paints for the complete project. The products are of top-notch quality, and their service is also very satisfactory. I look forward to using their products in my factory and would also recommend others to use them.”`,
      img: "/assets/images/Testimonials/Yogesh_Maheshwari.jpg",
      name: "Yogesh Maheshwari",
      initials: "YM",
    },
    {
      text: `“Maheshwari Enterprises handled the waterproofing project at my residence with the utmost perfection. The products they provide are very innovative and technologically advanced. Their penetrative waterproofing showed promising results, and I am more than happy with it. I would highly recommend it to others!!”`,
      img: "/assets/images/Testimonials/Tulsidas_Sangtani.jpg",
      name: "Tulsi Das Sangtani",
      initials: "TDS",
    },
    {
      text: `“Maheshwari Enterprises executed the plumbing project at my residence with absolute perfection and precision. The plumbing technology they provided is completely reliable and advanced than any other I have known. Their composite plumbing pipe ensures no leakage of both hot and cold water, and even gas pipe for kitchen. I am totally satisfied with their work. I highly recommend them to others!!”`,
      img: "",
      name: "Ganpat Sharma",
      initials: "GS",
    },
    {
      text: `“My factory, Prince Art Export, has been a regular customer of Maheswari Enterprises when it comes to pipes for compressor line. The product and service they provide is unmatched. The pipes for compressor lines are of highest quality, which ensures safety. My experience with Maheshwari Enterprises is highly satisfactory and would recommend them to others also.”`,
      img: "",
      name: "Prince Art",
      initials: "PA",
    },
    {
      text: `“My hotel and resort,Thar Oasis in Dechu now has a state-of-the-art plumbing system courtesy of Maheshwari Enterprises. The KiTEC plumbing pipes provided are safe, easy to handle, and come in lengths of up to 200 meters, reducing the need for additional fittings. Highly satisfied with both the product and service, I highly recommend Maheshwari Enterprises.!!”`,
      img: "",
      name: "Thar Oasis",
      initials: "TO",
    },
  ];

  return (
    <div className="review-container">
      <div className="review-header">
        <h2>Clients review</h2>
        <p>
          Our expertise in the field, spanning 30 years, sets us apart from
          competitors, making us pioneers in introducing cutting-edge
          technologies in Jodhpur and neighboring areas.
        </p>
      </div>
      <div className="review-slides">
        <Client_slide slides={slides} />
      </div>
    </div>
  );
};

export default Client_review;
