import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import prodData from "../products_services.json";
import "../styles/ProductServiceDetails.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import LazyLoad from "react-lazyload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductServiceDetails = () => {
  const { title, prodId, category } = useParams();
  const navigate = useNavigate();

  let companyItem = {};
  if (category === "products") {
    companyItem = prodData.products.find((product) => product.id === prodId);
  } else if (category === "services") {
    companyItem = prodData.services.find((service) => service.id === prodId);
  }

  const handlePrevious = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate(1);
  };

  return (
    <>
      {category === "products" && (
        <div className="product-service-details">
          <div className="product-service-card">
            <div className="navigation-buttons" style={{ marginTop: "-10px", marginBottom: "10px" }}>
              <button onClick={handlePrevious}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button onClick={handleNext} style={{ marginLeft: "2px" }}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="prod-serv-catalog-container">
              <div className="prod-serv-title">{title}</div>
              <a href="#">
                <button className="catalog-btn buttonDownload">
                  Product Catalog
                </button>
              </a>
            </div>
            <div className="prod-serv-items">
              {companyItem.companyItems.map((company_item, index) => {
                const bulletPoints = company_item.itemDesc.split(";");
                return (
                  <div key={index} className="ps_item_container">
                    <div className="ps_item_title">{company_item.itemTitle}</div>
                    {company_item.itemImage && (
                      <div className="ps_item_image">
                        <img
                          src={company_item.itemImage}
                          alt={company_item.itemTitle}
                          style={{ height: "180px", width: "260px" }}
                        />
                      </div>
                    )}
                    <div className="ps_item_desc">
                      {bulletPoints.length > 1 ? (
                        <div style={{"color":"#fff"}}>
                          {bulletPoints.map((point, index) => (
                            <>
                              {point}
                              {index < bulletPoints.length - 1 && ", "}
                              </>
                          ))}
                        </div>
                      ) : (
                        <div className="normal-pd-desc">{company_item.itemDesc}</div>
                      )}
                    </div>
                    <Link to={`/products-and-services/${title}/${prodId}/${category}/${company_item.itemTitle}`}>
                      <button className="ps_read-more">Read More...</button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {category === "services" && (
        <div className="product-service-details">
          <div className="product-service-card">
            <div className="navigation-buttons" style={{ marginTop: "-10px", marginBottom: "10px" }}>
              <button onClick={handlePrevious}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </div>
            <div className="prod-serv-title">{title}</div>
            <div className="prod-serv-desc">
              {companyItem.readMore?.read_description}
            </div>
            <Carousel style={{ margin: "auto", height: "500px" }}>
              {companyItem.readMore?.servItems.map((item, index) => (
                <Carousel.Item key={index} interval={3000}>
                  <LazyLoad height={500} once>
                    <img src={item["item-img"]} alt={item["item-desc"]} />
                  </LazyLoad>
                  <p style={{ color: "#fff" }}>{item["item-desc"]}</p>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductServiceDetails;
