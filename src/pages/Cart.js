import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imgUrl} alt={item.name} />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>Price: KES {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            Total: KES{" "}
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}

        <Link to="/checkout" className="checkout-button">
            Proceed to Checkout
        </Link>

          </div>
        </>
        
      )}
    </div>
  );
};

export default Cart;
