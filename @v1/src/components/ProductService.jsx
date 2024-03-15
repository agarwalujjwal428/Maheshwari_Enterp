import React from "react";
// import { useHistory } from "react-router-dom";

const ProductService = ({ id, data }) => {
  //   const history = useHistory();

  //   const handleReadMore = () => {
  //     history.push(`/products/${product.id}`);
  //   };

  return (
    <div className="product-service" id={id}>
      <img src={data.img} style={{ width: "200px", height: "200px" }}></img>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <button class="read-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="read-btn-text">Read More</span>
      </button>{" "}
    </div>
  );
};

export default ProductService;
