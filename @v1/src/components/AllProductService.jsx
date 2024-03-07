import React from 'react';
import ProductService from './ProductService';

const AllProductService = () => {
    const products = [
      {
        id: 1,
        title: 'Product 1',
        description: 'This is a brief description of Product 1. Click "Read More" to learn more.',
        fullDescription:
          'This is the full description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
      },
      // Other product/service items
    ];
  
    return (
      <div className="all-product-services">
        {products.map((product) => (
          <ProductService key={product.id} product={product} />
        ))}
      </div>
    );
  };
  export default AllProductService;