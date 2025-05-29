// ProductsPage.jsx
import React from 'react';
import maroonRose from '../assets/maroon-roses.jpg';
import pinkRoses from '../assets/pink-roses.jpg';
import mixedRoses from '../assets/mixed-roses-bouquet.jpg';
import photoBouquet from '../assets/photo-bouquet.jpg';
import blackGlittered from '../assets/black-glittered.jpg';
import blackRoses from '../assets/black-roses.jpg';
import moneyBouquet1 from '../assets/blue-money.jpg';
import flowerBox from '../assets/flower-box.jpg';
import maroonForever from '../assets/maroon-forever-roses.jpg';
import moneyBouquet2 from '../assets/money-bouquet.jpg';
import jipso from '../assets/red-roses-jipso.jpg';
import snackBouquet from '../assets/snack-bouquet.jpg';
import pinkForever from '../assets/pink-forever-roses.jpg';
import cutePink from '../assets/cute-pink.jpg';
import katty1 from '../assets/katty1.jpg';
import katty2 from '../assets/katty2.jpg';
import katty3 from '../assets/katty3.jpg';
import mixedMroon from '../assets/mixed-maroon.jpg';
import mothersDay from '../assets/mothers-day.jpg';




import './Products.css';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Red Mixed Bouquet', price: 2500, imgUrl: mixedRoses },
    { id: 2, name: 'Pink Roses', price: 950, imgUrl: pinkRoses },
    { id: 3, name: 'Maroon Roses', price: 1300, imgUrl: maroonRose },
    { id: 4, name: 'Photo Bouquet', price: 3600, imgUrl: photoBouquet },
    { id: 5, name: 'Mixed Bouquet', price: 2500, imgUrl: jipso },
    { id: 6, name: 'Black Roses', price: 950, imgUrl: blackRoses },
    { id: 7, name: 'Money Bouquet', price: 1300, imgUrl: moneyBouquet1 },
    { id: 8, name: 'Pink Forever Roses', price: 3600, imgUrl: pinkForever},
    { id: 9, name: 'Snack Bouquet', price: 5500, imgUrl: snackBouquet },
    { id: 10, name: 'Money Bouquet', price: 2500, imgUrl: moneyBouquet2 },
    { id: 11, name: 'Black Forever Roses', price: 3600, imgUrl: blackGlittered },
    { id: 12, name: 'Flower Box', price: 3600, imgUrl: flowerBox},
    { id: 13, name: 'Maroon Forever Roses', price: 3600, imgUrl: maroonForever },
    { id: 14, name: 'Floral Gift Bag', price: 3600, imgUrl: katty1},
    { id: 15, name: 'Mixed Roses Bouquet', price: 5500, imgUrl:mixedMroon },
    { id: 16, name: 'Table Roses', price: 2500, imgUrl: katty3},
    { id: 17, name: 'Maroon Forever Roses', price: 3600, imgUrl:  mothersDay},
    { id: 18, name: 'Pink Mixed Bouquet', price: 3600, imgUrl: cutePink},
    { id: 19, name: 'Floral Gift Bag', price: 3600, imgUrl: katty2 },
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
