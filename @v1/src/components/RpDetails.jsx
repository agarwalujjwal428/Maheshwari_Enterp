import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recentData from "../RecentProject.json";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const RpDetails = () => {
  const navigate = useNavigate();
  const handlePrevious = () => {
    navigate(-1);
  };
  const { id, title, category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const rpItem = recentData[decodedCategory]?.find(
    (item) => item.id == parseInt(id)
  );

  useEffect(() => {
    window.scrollTo(0, 80);
  }, []);

  console.log("***recent project", rpItem);

  return (
    <>
      <div className="rp-details">
        <div className="rp-card">
          <div
            className="navigation-buttons"
            style={{ marginTop: "-10px", marginBottom: "10px" }}
          >
            <button onClick={handlePrevious}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>
          <div className="rp-title">{title}</div>
          <div className="rp-desc">{rpItem.readMore?.read_description}</div>
          <Carousel style={{ margin: "auto", height: "500px" }}>
            {rpItem.readMore.servItems.map((item, index) => (
              <Carousel.Item key={index} interval={3000}>
                <img src={item["item-img"]} alt={item["item-desc"]} />
                <p style={{ color: "#606060" }}>{item["item-desc"]}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default RpDetails;
