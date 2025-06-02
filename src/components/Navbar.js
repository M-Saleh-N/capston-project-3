import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Navbar.css';
import cart_icon from '../assets/cart_icon.png';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <p>MARIDADI BOUQUETS KE</p>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
        <li><Link to="/checkout" onClick={() => setMenuOpen(false)}>Checkout</Link></li>
        <li className="mobile-login-btn">
          <button onClick={() => setMenuOpen(false)}>Login</button>
        </li>
        <li className="mobile-cart-link">
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            <img src={cart_icon} alt='cart' />
            <span className="nav-cart-count">{total}</span>
          </Link>
        </li>
      </ul>

      <div className='nav-login-cart'>
        <button className="desktop-login">Login</button>
        <Link to="/cart" className="cart-icon-link desktop-cart">
          <img src={cart_icon} alt='cart' />
          <div className='nav-cart-count'>{total}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
