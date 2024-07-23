import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import prodData from "../products_services.json";
import "../styles/ProductServiceItem.css";
import { Enquiry } from "./Enquiry";
import LazyLoad from "react-lazyload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ProductServiceItem = () => {
  const { title, prodId, category, itemTitle } = useParams();
  const [showDialog, setShowDialog] = useState(false);

  const specialItemTitles = [
    "Equal Tee",
    "Reducing Tee",
    "Female Tee",
    "Equal Elbow",
    "Reduced Elbow",
    "Female Elbow",
    "Male Thread Connector",
    "Female Thread Connector",
    "Reducer",
    "Straight Coupler",
    "Saddle",
    "Pipe Plug",
    "Special Fitting",
  ];
  const navigate = useNavigate();
  const handlePrevious = () => {
    navigate(-1);
  };

  const getItemData = () => {
    if (category === "products") {
      return prodData.products.find((product) => product.id === prodId);
    } else if (category === "services") {
      return prodData.services.find((service) => service.id === prodId);
    }
    return {};
  };

  const itemData = getItemData();
  const companyItem = itemData.companyItems.find(
    (item) => item.itemTitle === itemTitle
  );

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  const bulletPoints = companyItem.itemDesc.split(";");

  return (
    <div className="pro-serv-item-details">
      <div className="pro-serv-card">
        <div
          className="navigation-buttons"
          style={{ marginTop: "-10px", marginBottom: "10px" }}
        >
          <button onClick={handlePrevious}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <div className="enquiry-container">
          <h2 className="pro-serv-item-head">{itemTitle}</h2>
          <button className="enquiry-button" onClick={toggleDialog}>
            Enquiry
          </button>
        </div>

        <div className="product-detail">
          <div className="product-header">
            {companyItem.itemImage !== "" && (
              <div className="pro-serv-item-image" style={{"width":"50%", "height":"260px"}}>
                <LazyLoad height={180} once>
                  <img
                    src={companyItem.itemImage}
                    alt={companyItem.itemTitle}
                   
                  />
                </LazyLoad>
              </div>
            )}
            <div className="product-description"  style={{ width: companyItem.itemImage !== "" ? "50%" : "100%" }} >
            {bulletPoints.length > 1 ? (
                <div className="bullet-pd-desc">
                  <ul>
                    {bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="normal-pd-desc">{companyItem.itemDesc}</div>
              )}
            </div>
          </div>
          <div>
            <h4 id="ps-item-size-head">Sizes</h4>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    {specialItemTitles.includes(companyItem.itemTitle) ? (
                      <>
                        <th>Pack Size</th>
                        <th style={{ paddingLeft: "60px" }}>
                          Composite Compression
                        </th>
                        <th style={{ paddingLeft: "40px" }}>
                          Brass Compression
                        </th>
                        <th style={{ paddingLeft: "60px" }}>SS304</th>
                      </>
                    ) : (
                      <>
                        <th>Product</th>
                        <th>Pack Size / Details</th>
                        {companyItem.itemDetails.itemSizes[0]?.extra1 && (
                          <th>Shipper Pack</th>
                        )}
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {companyItem.itemDetails.itemSizes.map((item, index) => (
                    <tr key={index}>
                      {specialItemTitles.includes(companyItem.itemTitle) ? (
                        <>
                          <td>{item.size}</td>
                          <td
                            style={{ paddingLeft: "135px" }}
                            className="ps-item-check psc-1"
                          >
                            {item.composite}
                          </td>
                          <td
                            style={{ paddingLeft: "95px" }}
                            className="ps-item-check psc-2"
                          >
                            {item.brass}
                          </td>
                          <td
                            style={{ paddingLeft: "75px" }}
                            className="ps-item-check psc-3"
                          >
                            {item.SS304}
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{item.suitableFor}</td>
                          <td>{item.size}</td>
                          {item?.extra1 && <td>{item.extra1}</td>}
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showDialog && (
        <div className="dialog-container">
          <div className="dialog-content">
            <button className="close-dialog" onClick={toggleDialog}>
              &times;
            </button>
            <Enquiry itemTitle={itemTitle} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductServiceItem;
