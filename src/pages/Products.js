// ProductsPage.jsx
import React from 'react';
import maroonRose from '../assets/maroon-roses.jpg';
import pinkRoses from '../assets/pink-roses.jpg';
import mixedRoses from '../assets/mixed-roses-bouquet.jpg';
import './Products.css';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Red Mixed Bouquet', price: 2500, imgUrl: mixedRoses },
    { id: 2, name: 'Pink Roses', price: 950, imgUrl: pinkRoses },
    { id: 3, name: 'Maroon Roses', price: 1300, imgUrl: maroonRose },
  ];

  return (
    <div className="product-container">
      <h2 className="page-title">Our Bouquets</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>KES {product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
