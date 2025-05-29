import React from 'react';
import './Products.css';



const products = [
  {
    id: 1,
    name: "Rose Bouquet",
    price: 25.00,
    img: "/images/rose.jpg",
  },
  {
    id: 2,
    name: "Tulip Delight",
    price: 30.00,
    img: "",
  },
  {
    id: 3,
    name: "Sunflower Charm",
    price: 20.00,
    img: "/images/sunflower.jpg",
  },
  // Add more products as needed
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
            <p className="pr">${prod.price.toFixed(2)}</p>
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
