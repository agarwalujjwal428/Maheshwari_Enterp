import React,{useEffect} from "react";
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
                  {companyItem.itemDetails.itemSizes.map((item) => (
                    <tr>
                      {specialItemTitles.includes(companyItem.itemTitle) ? (
                        <>
                          <td>{item.size}</td>
                          <td style={{ paddingLeft: "135px" }}>
                            {item.composite}
                          </td>
                          <td style={{ paddingLeft: "95px" }}>{item.brass}</td>
                          <td style={{ paddingLeft: "75px" }}>{item.SS304}</td>
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
    </div>
  );
};

export default ProductServiceItem;
