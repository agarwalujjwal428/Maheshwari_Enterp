import React, { useState } from "react";
import ProductService from "./ProductService";
import prodData from "../products_services.json";
import "../styles/AllProductService.css";

const AllProductService = () => {
  const [active, setActive] = useState(true);

  function handleOnClick(e) {
    const buttonClassName = e.target.className;

    if (buttonClassName.includes("products-btn")) {
      setActive(true);
    } else if (buttonClassName.includes("services-btn")) {
      setActive(false);
    }
  }

  return (
    <>
      <div className="product-bg">
        <img src="/src/assets/images/j.jpg" alt="Product Background" />
        <div className="product-head">
          <h2 id="ph-first">Products</h2>
           <h2 id="ph-second">&</h2> 
           <h2 id="ph-third">Services</h2>
           </div>
      </div>

      <div className="prod-serv-container">
        <div className="prod-serv-btn-container">
          <button
            className={`prod-serv-btn products-btn ${
              active ? "prod-active" : ""
            }`}
            onClick={handleOnClick}
          >
            Products
          </button>
          <button
            className={`prod-serv-btn services-btn ${
              !active ? "prod-active" : ""
            }`}
            onClick={handleOnClick}
          >
            Services
          </button>
        </div>

        {active ? (
          <div className="prod-container">
            <h2 className="prod-serv-head">
              Our Products
              <div className="prod-border"></div>
            </h2>
            <div className="prod-data">
              {prodData.products.map((product) => (
                <ProductService
                  key={product.id}
                  prodId={product.id}
                  data={product}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="serv-container">
            <h2 className="prod-serv-head">
              Our Services
              <div className="prod-border"></div>
            </h2>
            <div className="serv-data">
              {prodData.services.map((service) => {
                console.log("****", service.id); // Log prodId for each service
                return (
                  <ProductService
                    key={service.id}
                    prodId={service.id}
                    data={service}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProductService;
