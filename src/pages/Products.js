// ProductsPage.jsx
import React from 'react';
import maroonRose from '../assets/maroon-roses.jpg';
import pinkRoses from '../assets/pink-roses.jpg';
import mixedRoses from '../assets/mixed-roses-bouquet.jpg';
import photoBouquet from '../assets/photo-bouquet.jpg';
import blackGlittered from '../assets/black-glittered.jpg';
import blackRoses from '../assets/black-roses.jpg';
import moneyBouquet1 from '../assets/blue-money.jpg';
import cutePink from '../assets/cute-pink.jpg';
import './Products.css';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Red Mixed Bouquet', price: 2500, imgUrl: mixedRoses },
    { id: 2, name: 'Pink Roses', price: 950, imgUrl: pinkRoses },
    { id: 3, name: 'Maroon Roses', price: 1300, imgUrl: maroonRose },
    { id: 4, name: 'Photo Bouquet', price: 3600, imgUrl: photoBouquet },
    { id: 5, name: 'Black Glittered Roses', price: 2500, imgUrl: blackGlittered },
    { id: 6, name: 'Black Roses', price: 950, imgUrl: blackRoses },
    { id: 7, name: 'Money Bouquet', price: 1300, imgUrl: moneyBouquet1 },
    { id: 8, name: 'Pink Forever Roses', price: 3600, imgUrl: cutePink },
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
