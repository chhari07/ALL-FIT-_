import React from 'react';
import './Upcomings.css';

const Upcomings = () => {
  return (
   <div>
    <div className="container">
      <div id="marketing" className="section">
        <div className="content">
          <h1  className=' text-white'  >AI CHAT BOT</h1>
        </div>
        <div className="overlay"></div>
      </div>
      <div id="technology" className="section">
        <div className="content">
          <h1  className=' text-white'  > DASHBOARD  </h1>
        </div>
        <div className="overlay"></div>
      </div>
      <div id="advertising" className="section">
        <div className="content">
          <h1   className=' text-white'   >CALORIE TRACKER  </h1>
        </div>
        <div className="overlay"></div>
      </div>
    </div>
   </div>
  );
};

export default Upcomings;
