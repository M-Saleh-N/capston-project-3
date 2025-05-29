import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About'
import Check from './pages/Checkout';
import Cart from './pages/Cart';
import Homie from './pages/Home'
import HomePage from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <About />
  },

  {
    path: "/cart",
    element: <Cart />
  },

   {
    path: "/checkout",
    element: <Check />
  }
  ])

root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();