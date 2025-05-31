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

import img20 from '../assets/20.jpg';
import img21 from '../assets/21.jpg';
import img22 from '../assets/22.jpg';
import img23 from '../assets/23.jpg';
import img24 from '../assets/24.jpg';
import img25 from '../assets/25.jpg';
import img26 from '../assets/26.jpg';
import img27 from '../assets/27.jpg';
import img28 from '../assets/28.jpg';
import img29 from '../assets/29.jpg';
import img30 from '../assets/30.jpg';
import img31 from '../assets/31.jpg';
import img32 from '../assets/32.jpg';
import img33 from '../assets/33.jpg';
import img34 from '../assets/34.jpg';
import img35 from '../assets/35.jpg';
import img36 from '../assets/36.jpg';
import img37 from '../assets/37.jpg';
import img38 from '../assets/38.jpg';
import img41 from '../assets/41.jpg';
import img39 from '../assets/39.jpg';
import img40 from '../assets/40.jpg';





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

   
    { id: 20, name: 'Red Mixed Bouquet', price: 2500, imgUrl: img20 },
    { id: 21, name: 'Pink Roses', price: 950, imgUrl: img21 },
    { id: 22, name: 'Maroon Roses', price: 1300, imgUrl: img22 },
    { id: 23, name: 'Photo Bouquet', price: 3600, imgUrl: img23 },
    { id: 24, name: 'Mixed Bouquet', price: 2500, imgUrl: img24 },
    { id: 25, name: 'Black Roses', price: 950, imgUrl: img25 },
    { id: 26, name: 'Money Bouquet', price: 1300, imgUrl: img26 },
    { id: 27, name: 'Pink Forever Roses', price: 3600, imgUrl: img27 },
    { id: 28, name: 'Snack Bouquet', price: 5500, imgUrl: img28 },
    { id: 29, name: 'Money Bouquet', price: 2500, imgUrl: img29 },
    { id: 30, name: 'Black Forever Roses', price: 3600, imgUrl: img30 },
    { id: 31, name: 'Flower Box', price: 3600, imgUrl: img31 },
    { id: 32, name: 'Maroon Forever Roses', price: 3600, imgUrl: img32 },
    { id: 33, name: 'Floral Gift Bag', price: 3600, imgUrl: img33 },
    { id: 34, name: 'Mixed Roses Bouquet', price: 5500, imgUrl: img34 },
    { id: 35, name: 'Table Roses', price: 2500, imgUrl: img35 },
    { id: 36, name: 'Maroon Forever Roses', price: 3600, imgUrl: img36 },
    { id: 37, name: 'Pink Mixed Bouquet', price: 3600, imgUrl: img37 },
    { id: 38, name: 'Floral Gift Bag', price: 3600, imgUrl: img38 },
    { id: 39, name: 'Special Gift Box', price: 3000, imgUrl: img39 }, // optional placeholder
    { id: 40, name: 'Luxury Box', price: 4500, imgUrl: img40 },       // optional placeholder
    { id: 41, name: 'Rose Heart Box', price: 3800, imgUrl: img41 },
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
