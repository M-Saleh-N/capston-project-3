import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Maridadi.png';
import cart_icon from '../assets/cart_icon.png';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>MARIDADI BOUQUETS KE</p>
      </div>
      <ul className='nav-menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <Link to="/cart" className="cart-icon-link">
          <img src={cart_icon} alt='cart' />
          <div className='nav-cart-count'>{total}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
