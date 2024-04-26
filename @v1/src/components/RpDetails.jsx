
import React from "react";
import { useParams } from "react-router-dom";
import recentData from "../RecentProject.json";
import Carousel from "react-bootstrap/Carousel";

const RpDetails = () => {
  const { id, title, category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const rpItem = recentData[decodedCategory]?.find(
    (item) => item.id == parseInt(id)
  );

  console.log("***recent project", rpItem);

  return (
    <>
      <div className="rp-details">
        <div className="rp-card">
          <div className="rp-title">{title}</div>
          <div className="rp-desc">
            {rpItem.readMore?.read_description}
          </div>
          <Carousel style={{ margin: "auto", height: "500px" }}>
            {rpItem.readMore.servItems.map((item, index) => (
              <Carousel.Item key={index} interval={3000}>
                <img
                  src={item["item-img"]}
                  alt={item["item-desc"]}
                  style={{
                    height: "300px",
                    width: "auto",
                    margin: "60px 0 0 165px"
                  }}
                />
                <p
                  style={{
                    color: "#606060",
                    fontWeight: "bold",
                    margin: "25px 0 20px 65px",
                    width: "80%",
                    textAlign: "justify",
                  }}
                >
                  {item["item-desc"]}
                </p>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default RpDetails;