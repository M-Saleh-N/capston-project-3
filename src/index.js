import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Check from './pages/Checkout';
import Cart from './pages/Cart';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import { CartProvider } from './context/CartContext';
import './index.css';
import SingleProduct from './pages/SingleProduct';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'cart', element: <Cart /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'checkout', element: <Check /> },
      { path: 'products/:id', element: <SingleProduct /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
