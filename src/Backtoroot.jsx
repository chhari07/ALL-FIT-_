import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Backtoroot.css';

function Backtoroot() {
  return (
    <div>
      <h1 className="text-white">BACK TO ROOTS</h1>
      
     
      <div className="gridywrap">
        <div className="gridy-2 gridyhe-1">
     
          <div className="gridimg" style={{ backgroundImage: 'url(https://ununsplash.imgix.net/photo-1415302199888-384f752645d0?q=75&fm=jpg&s=823bdcc1b7ad955f5180efd352561016)' }}>&nbsp;</div>
       
          <div className="gridinfo">
          <NavLink to="/details" >
            <h3>Item Title</h3>
            </NavLink>
            <div className="gridmeta">
              <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p>
              <p className="gridwho"><i className="fa fa-user"></i> Bruce Wayne</p>
            </div>
            <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p>
           
              <span>More</span> <i className="fa fa-plus"></i>
          
          </div>
        </div>
      
        <div className="gridy-1 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url(https://unsplash.imgix.net/photo-1417722009592-65fa261f5632?q=75&fm=jpg&s=553e7d8a753f4d7b2a4161dcbe9d9801)' }}>&nbsp;</div>
          <div className="gridinfo">
          <NavLink to="/details" >
            <h3>Item Title</h3>
            </NavLink>
            <div className="gridmeta">
              <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p>
              <p className="gridwho"><i className="fa fa-user"></i> Harvey Dent</p>
            </div>
            <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p>
          
              <span>More</span> <i className="fa fa-plus"></i>
         
          </div>
        </div>

        <div className="gridy-1 gridyhe-2">
          <div className="gridimg" style={{ backgroundImage: 'url(https://ununsplash.imgix.net/photo-1416934625760-d56f5e79f6fe?q=75&fm=jpg&s=032ca37757b3dc1851661856b956a24c)' }}>&nbsp;</div>
          <div className="gridinfo">
          <NavLink to="/details" >
            <h3>Item Title</h3>
            </NavLink>
            <div className="gridmeta">
              <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p>
              <p className="gridwho"><i className="fa fa-user"></i> Clark Kent</p>
            </div>
            <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p>
           
              <span>More</span> <i className="fa fa-plus"></i>
      
          </div>
        </div>

        <div className="gridy-2 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url(https://unsplash.imgix.net/uploads/1412862685615b0212e3d/5fcb0a55?q=75&fm=jpg&s=e003fb9a4e39e3c07e4a94f7e0ef3db8)' }}>&nbsp;</div>
          <div className="gridinfo">
          <NavLink to="/details" >
            <h3>Item Title</h3>
            </NavLink>
            <div className="gridmeta">
              <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p>
              <p className="gridwho"><i className="fa fa-user"></i> Tony Stark</p>
            </div>
            <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p>
           
              <span>More</span> <i className="fa fa-plus"></i>
          
          </div>
        </div>

        <div className="gridy-1 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url(https://ununsplash.imgix.net/photo-1418227165283-1595d13726cd?q=75&fm=jpg&s=cace1590a29be6d4d6db13c3ebd1ba72)' }}>&nbsp;</div>
          <div className="gridinfo">
          <NavLink to="/details" >
            <h3>Item Title</h3>
            </NavLink>
            <div className="gridmeta">
              <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p>
              <p className="gridwho"><i className="fa fa-user"></i> Steve Rogers</p>
            </div>
            <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p>
           
              <span>More</span> <i className="fa fa-plus"></i>
         
          </div>
        </div>

        <div className="gridy-1 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url(https://unsplash.imgix.net/uploads/1411589183965bdf6e141/5f468e98?q=75&fm=jpg&s=007333c388fb36767cbd152600bea6b8)' }}>&nbsp;</div>
          <div className="gridinfo">
          <NavLink to="/details" >
            <h3>Item Title</h3>
            </NavLink>
            <div className="gridmeta">
              <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p>
              <p className="gridwho"><i className="fa fa-user"></i> Natasha Romanoff</p>
            </div>
            <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p>
         
              <span>More</span> <i className="fa fa-plus"></i>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backtoroot;
