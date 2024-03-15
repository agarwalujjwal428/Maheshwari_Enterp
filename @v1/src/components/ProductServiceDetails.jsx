import React from "react";
import { useParams } from "react-router-dom";
import prodData from "../products_services.json";
import "../styles/ProductServiceDetails.css";
import { Link } from "react-router-dom";

const ProductServiceDetails = () => {
  const { title, prodId, category } = useParams();
  let companyItem = {};
  if (category === "products") {
    companyItem = prodData.products.find((product) => product.id === prodId);
  } else if (category === "services") {
    companyItem = prodData.services.find((service) => service.id === prodId);
  }
  console.log("****comapny",companyItem);
    
  return (
    <div className="product-service-details">
      <div className="product-service-card">
        <div className="prod-serv-catalog-container">
          <div className="prod-serv-title">{title}</div>
          <a href="#">
            <button className="catalog-btn buttonDownload">
              Product Catalog
            </button>
          </a>
        </div>
        <div className="prod-serv-items">
          {companyItem.companyItems.map((company_item) => (
            <>
              <div className="ps_item_container">
                <div className="ps_item_title">{company_item.itemTitle}</div>
                {company_item.itemImage !== "" && (
                  <div className="ps_item_image">
                    <img
                      src={company_item.itemImage}
                      alt={company_item.itemTitle}
                      style={{ height: "180px", width: "260px" }}
                    />
                  </div>
                )}
                <div className="ps_item_desc">{company_item.itemDesc}</div>
                <Link
                  to={`/products-and-services/${title}/${prodId}/${category}/${company_item.itemTitle}`}
                >
                  <button className="ps_read-more">Read More...</button>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductServiceDetails;
