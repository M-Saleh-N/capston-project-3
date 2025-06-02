import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Browse Products</Link></p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imgUrl} alt={item.name} style={{ width: '100px' }} />
              <div>
                <h4>{item.name}</h4>
                <p>KES {item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: KES {total}</h3>
          <Link to="/checkout"><button>Proceed to Checkout</button></Link>
        </div>
      )}
    </div>
  );
};

export default Cart;