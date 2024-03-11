import React from 'react';
import ProductService from './ProductService';

const AllProductService = () => {
    const products = [
      {
        id: 1,
        title: 'KiTEC Industries (INDIA) Pvt. Ltd.',
        description: 'Being the Pioneer of multilayer pipes (PE-AL-PE) in India since 1996, KiTEC is now been recognised for its excellence in quality KiTEC pipe uses special polyethylene grade which is hygienic, non-toxic and smooth. The middle aluminum layer is impermeable. This structure provides KiTEC pipe the advantages of both metal and plastic while avoiding all the weaknesses associated with these materials.',
      },
      {
        id: 2,
        title: 'NCL Buildtek',
        description: 'Alltek is the first company in India to manufacture Putty (Textured Paints). It manufactures different grades and different finishes for interior and exterior applications like plain, granular, textured and other designer finishes to suit various tastes of Architects, Builders and Interior Designers.Innovation and new products catering to the ever-growing needs of the construction sector has been the Companies forte.',
      },
      {
        id: 3,
        title: 'Zydex Industries',
        description: 'Prolonged exposure to water causes accelerated ageing and damage to civil structures. Conventional waterproofing chemicals form a barrier over these civil structures to prevent water ingress. The nanotechnology from Zydex is permanent and easy solution for waterproofing issues. Its technological advancements provides it exceptional elasticity and strength to the structure.',
      },
      {
        id: 4,
        title: 'ABRO Pvt. Ltd.',
        description: 'ABRO Industries operates in a complete different framework than the competitors. It values its customers the most and thus the quality it provides is one of the best around the globe.We distribute a certain range of masking tapes and floor coatings out the innumerable range of products it is a leader in.',
      },
      {
        id: 5,
        title: 'Akar Valves',
        description: 'Specialised compression type end connection Ball Valves, Non Return Valves and Overhead Tank Nipples etc, designed and developed for Composite Piping Systems.The range we supply includes the valves for water, compressor and LPG gas supply. ',
      },
      {
        id: 6,
        title: 'Heti Entrepreneur',
        description: 'Heti Entrepreneur is a leading manufacturer of stainless steel water storage tank, shower drain & water tank. The company believes in redefining the class of life with its cutting edge products.We keep a wide range of shower drains that helps you keep your bathrooms superior and stylish.',
      },
      {
        id: 7,
        title: 'Advance Agrisearch Ltd.',
        description: 'Advance Agrisearch Limited is a well know ISO 9001-2008 Certified Company and leader in ready-to-use Colourless oil-based wood preservative. ',
      },
      {
        id: 8,
        title: 'KiTEC Industries (INDIA) Pvt. Ltd.',
        description: 'Being the Pioneer of multilayer pipes (PE-AL-PE) in India since 1996, KiTEC is now been recognised for its excellence in quality KiTEC pipe uses special polyethylene grade which is hygienic, non-toxic and smooth. The middle aluminum layer is impermeable. This structure provides KiTEC pipe the advantages of both metal and plastic while avoiding all the weaknesses associated with these materials.',
      },
      {
        id: 9,
        title: 'KiTEC Industries (INDIA) Pvt. Ltd.',
        description: 'Being the Pioneer of multilayer pipes (PE-AL-PE) in India since 1996, KiTEC is now been recognised for its excellence in quality KiTEC pipe uses special polyethylene grade which is hygienic, non-toxic and smooth. The middle aluminum layer is impermeable. This structure provides KiTEC pipe the advantages of both metal and plastic while avoiding all the weaknesses associated with these materials.',
      },
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