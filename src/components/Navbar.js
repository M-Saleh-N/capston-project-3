import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

import logo from '../assets/Maridadi.png'

const Navbar = () => {
  return(
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>MARIDADI BOUQUETS KE</p>
      </div>

    </div>
  )

}


export default Navbar;
