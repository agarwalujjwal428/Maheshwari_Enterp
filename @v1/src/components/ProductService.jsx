import React from "react";
// import { useHistory } from "react-router-dom";

const ProductService = ({ id, product }) => {
  //   const history = useHistory();

  //   const handleReadMore = () => {
  //     history.push(`/products/${product.id}`);
  //   };

  return (
    <div className="product-service" id={id}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <button >Read More</button>
    </div>
  );
};

export default ProductService;
