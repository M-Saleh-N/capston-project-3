import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/productsData'; 
import './SingleProduct.css'
import { useCart } from '../context/CartContext';

const SingleProduct = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="single-product-container">
      <img src={product.imgUrl} alt={product.name} style={{ width: '300px' }} />
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> KES {product.price}</p>
      <p><strong>Description:</strong> {product.description || 'Beautiful handcrafted bouquet perfect for every occasion.'}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default SingleProduct;