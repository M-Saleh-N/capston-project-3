import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

import logo from '../assets/Maridadi.png'
import cart_icon from '../assets/cart_icon.png'

const Navbar = () => {
  return(
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>MARIDADI BOUQUETS KE</p>
      </div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Products <hr/></li>
        <li>Cart</li>
        <li>Checkout</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt=''/>
        <div className='nav-cart-count'>0</div>
        
      </div>

    </div>
  )

}


export default Navbar;
