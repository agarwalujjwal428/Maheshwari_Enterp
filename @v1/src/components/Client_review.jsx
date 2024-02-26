import React from "react";
import Client_slide from "./Client_slide";
import "../styles/Client_review.css";

const Client_review = () => {
  const slides = [
    {
      text: `“Happy to work with Raeesees the best Arcitect agency perspiciatis unde omnis
        iste natus error sit volutatem acium doloremque”`,
      name: "LORA CRAFT",
      designation: "Managing Director",
    },
    {
      text: `“Happy to work with Raeesees the best Arcitect agency perspiciatis unde omnis
    iste natus error sit volutatem acium doloremque”`,
      name: "LORA CRAFT",
      designation: "Managing Director",
    },
    {
      text: `“Happy to work with Raeesees the best Arcitect agency perspiciatis unde omnis
    iste natus error sit volutatem acium doloremque”`,
      name: "LORA CRAFT",
      designation: "Managing Director",
    },
    {
      text: `“Happy to work with Raeesees the best Arcitect agency perspiciatis unde omnis
    iste natus error sit volutatem acium doloremque”`,
      name: "LORA CRAFT",
      designation: "Managing Director",
    },
    {
      text: `“Happy to work with Raeesees the best Arcitect agency perspiciatis unde omnis
    iste natus error sit volutatem acium doloremque”`,
      name: "LORA CRAFT",
      designation: "Managing Director",
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
