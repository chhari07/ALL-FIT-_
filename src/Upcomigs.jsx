import React from 'react';
import './Upcomings.css';

const Upcomings = () => {
  return (
    <div className="wrapper">
      <div className="parallax__group hero-container">
        <div className="parallax__layer sky"></div>
        <div className="parallax__layer bushes"></div>
        <div className="parallax__layer water"></div>
        <div className="parallax__layer people1"></div>
        <div className="parallax__layer people2"></div>
        <div className="parallax__layer people3"></div>
        <div className="parallax__layer hero-text">
          <div className="year-container">
            <h1>Upcomings</h1>
          </div>
        </div>
      </div>

      <div className="parallax__group info-container">
        <img src="https://pbs.twimg.com/media/Fjm_dssVIAAq4T2.jpg"  class='image'    alt="Lively and colourful concert" />
        <div className="text-container">
          <h2 className=' text-white  mt-36   '  >This is your year.</h2>
          <p  className=' text-white '>What would life be if we had no courage to attempt anything?</p>
          <p className=' text-white '  >- Vincent Van Gogh</p>
          <a href="#" className="btn">Get Started Now</a>
        </div>
      </div>

      <div className="parallax__group info-container">
        <img src=" https://pbs.twimg.com/media/Fjm_dssVIAAq4T2.jpg"   class='image'      alt="Lively and colourful concert" />
        <div className="text-container">
          <h2  className=' text-white  mt-36 '  >This is your year.</h2>
          <p  className=' text-white '    >What would life be if we had no courage to attempt anything?</p>
          <p   className=' text-white '  >- Vincent Van Gogh</p>
          <a href="#" className="btn">Get Started Now</a>
        </div>
      </div>

      <div className="parallax__group info-container">
        <img src="https://pbs.twimg.com/media/Fjm_dssVIAAq4T2.jpg"    class='image'         alt="Lively and colourful concert" />
        <div className="text-container">
          <h2  className=' text-white  mt-36 '   >This is your year.</h2>
          <p   className=' text-white '  >What would life be if we had no courage to attempt anything?</p>
          <p   className=' text-white '  >- Vincent Van Gogh</p>
          <a href="#" className="btn">Get Started Now</a>
        </div>
      </div>
    </div>
  );
};

export default Upcomings;
