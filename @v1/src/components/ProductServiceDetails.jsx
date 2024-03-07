import React from 'react';
import { useParams } from 'react-router-dom';

const ProductServiceDetails = () => {
  const { id } = useParams();
  const product = products[id];

  return (
    <div className="product-service-details">
      <h3>{product.title}</h3>
      <p>{product.fullDescription}</p>
    </div>
  );
};

export default ProductServiceDetails;