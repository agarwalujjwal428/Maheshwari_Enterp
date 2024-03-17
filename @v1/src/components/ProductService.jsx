import React from "react";
import { Link } from "react-router-dom";

const ProductService = ({ prodId, data }) => {
  console.log(prodId, data);
  return (
    <div className="product-service" id={prodId}>
      <img
        src={data.img}
        style={{ width: "200px", height: "200px" }}
        alt={data.title}
      />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <Link
        to={`/products-and-services/${data.title}/${prodId}/${data.category}`}
      >
        <button className="read-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="read-btn-text">Read More</span>
        </button>
      </Link>
    </div>
  );
};

export default ProductService;
