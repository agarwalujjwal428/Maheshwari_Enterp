import React from "react";
import { useParams } from "react-router-dom";
import prodData from "../products_services.json";
import "../styles/ProductServiceItem.css";

const ProductServiceItem = () => {
  const { title, prodId, category, itemTitle } = useParams();
  console.log(prodId, itemTitle);
  let itemData = {};

  if (category === "products") {
    itemData = prodData.products.find((product) => product.id === prodId);
  } else if (category === "services") {
    itemData = prodData.services.find((service) => service.id === prodId);
  }

  console.log("Product/Service:", itemData);

  const companyItem = itemData.companyItems.find(
    (item) => item.itemTitle === itemTitle
  );

  console.log("Company Item:", companyItem);

  return (
    <div className="pro-serv-item-details">
      <div className="pro-serv-card">
        <h2 className="pro-serv-item-head">{itemTitle}</h2>
        <div className="product-detail">
          <div className="product-header">
            {companyItem.itemImage !== "" && (
              <div className="pro-serv-item-image">
                <img
                  src={companyItem.itemImage}
                  alt={companyItem.itemTitle}
                  style={{ height: "180px", width: "260px" }}
                />
              </div>
            )}
            <div className="product-description">{companyItem.itemDesc}</div>
          </div>
          <div>
            <h4 id="ps-item-size-head">Sizes</h4>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Suitable For</th>
                    <th>X</th>
                    <th>XX</th>
                  </tr>
                </thead>
                <tbody>
                  {companyItem.itemDetails.itemSizes.map((item) => (
                    <tr>
                      <td>{item.size}</td>
                      <td>{item.suitableFor}</td>
                      <td>{item.extra1}</td>
                      <td>{item.extra2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4>Operating Condition</h4>
            <div className="table-wrapper">
              <table>
                <tbody>
                  {companyItem.itemDetails.itemOc.map((item) => (
                    <tr>
                      <td>{item.ocName}</td>
                      <td>{item.ocValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <h2>Product Specification</h2>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Part</th>
                <th>Material</th>
              </tr>
            </thead>
            <tbody>
              {companyItem.itemDetails.itemSpec.map((item) => (
                <tr>
                  <td>{item.specId}</td>
                  <td>{item.specPart}</td>
                  <td>{item.specMaterial}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductServiceItem;
