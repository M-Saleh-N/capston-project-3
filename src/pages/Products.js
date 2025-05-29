import React from 'react';
import './Products.css';


import maroonRose from '../assets/maroon-roses.jpg';
import pinkRoses from '../assets/pink-roses.jpg';
import mixedRoses from '../assets/mixed-roses-bouquet.jpg';

const products = [
  {
    id: 1,
    name: 'Red Mixed Bouquet',
    price: 2500,
    imgUrl: mixedRoses,
  },
  {
    id: 2,
    name: 'Pink Roses',
    price: 950,
    imgUrl: pinkRoses,
  },
  {
    id: 3,
    name: 'Maroon Roses',
    price: 1300,
    imgUrl: maroonRose,
  },
];
const ProductsPage = () => {
  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product.name}`);
    // Add cart logic here
  };

  return (
    <div className="pg">
      <h2 className="pg-title">Our Bouquets</h2>
      <div className="grid">
        {products.map((prod) => (
          <div className="card" key={prod.id}>
            <img src={prod.img} alt={prod.name} className="img" />
            <h3 className="nm">{prod.name}</h3>
            <p className="pr">Ksh{prod.price.toFixed(2)}</p>
            <button className="btn" onClick={() => handleAddToCart(prod)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
