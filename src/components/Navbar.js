import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-pink-100 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-600">
          Bloomify
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-pink-800 font-medium">
          <li className="hover:text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Shop</li>
          <li className="hover:text-pink-600 cursor-pointer">About</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
        </ul>

        {/* Cart Icon */}
        <div className="relative">
          <ShoppingCart className="text-pink-600 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;