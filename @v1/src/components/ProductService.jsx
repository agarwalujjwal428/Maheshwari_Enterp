import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const ProductService = ({ prodId, data }) => {
  console.log(prodId, data);
  console.log(data.img);
  return (
    <div className="product-service" id={prodId}>
      <LazyLoad height={200}>
        {data.img && (
          <img
            src={data.img}
            style={{ width: "100%", height: "200px" }}
            alt={data.title}
          />
        )}
      </LazyLoad>
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
