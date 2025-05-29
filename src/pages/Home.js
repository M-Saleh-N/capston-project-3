import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg">
      <h1 className="title">Welcome to Maridadi Bouquets</h1>

      <div className="center">
        <button className="btn" onClick={() => navigate('/products')}>
          <p>Explore Products</p>
        </button>
      </div>
    </div>
  );
};

export default HomePage;






