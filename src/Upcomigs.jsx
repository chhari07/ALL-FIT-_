import React from 'react';
import { NavLink } from 'react-router-dom';
import './Upcomings.css';

const Upcomings = () => {
  return (
    <div>
      <div className="container">
        <div id="marketing" className="section">
          <NavLink to="/chatbot" className="content">
            <h1 className="text-white">AI CHAT BOT</h1>
          </NavLink>
          <div className="overlay"></div>
        </div>
        
        <div id="technology" className="section">
          <NavLink to="/Dashboard" className="content">
            <h1 className="text-white">DASHBOARD</h1>
          </NavLink>
          <div className="overlay"></div>
        </div>

        <div id="advertising" className="section">
          <NavLink to="/calorie-tracker" className="content">
            <h1 className="text-white">CALORIE TRACKER</h1>
          </NavLink>
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Upcomings;
