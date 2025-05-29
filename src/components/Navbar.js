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
          <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
        <li>
          <Link to='/checkout'>Checkout</Link>
        </li>

      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
      </div>

    </div>
  )

}


export default Navbar;
