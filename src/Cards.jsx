import React from 'react'
import { NavLink } from 'react-router-dom'
import './Cards.css';

const Cards = () => {
  return (
    <div>
      <div className="wrapper tabled">
        <div className="stage" id="page1">
          <div className="middled">
            <h2 className='text-white uppercase bold'>Category</h2>

            <div className="link-1">
              <NavLink to="/Workout" activeClassName="active">
                <span className="thin">Work</span><span className="thick">Out</span>
              </NavLink>
              
            </div>

            <div className="link-2">
              <NavLink to="/Dietplan" activeClassName="active">
                <span className="thin">DIET</span><span className="thick">PLAN</span>
              </NavLink>
            
            </div>

            <div className="link-3">
              <NavLink to="/Yoga " activeClassName="active">
                <span className="thin">YO</span><span className="thick">GA</span>
              </NavLink>
             
            </div>

            <div className="link-4">
              <NavLink to="/Diabetes " activeClassName="active">
                <span className="thin">DIA</span><span className="thick">BETES</span>
              </NavLink>
             
            </div>

            <div className="link-5">
              <NavLink to="/Health " activeClassName="active">
                <span className="thin">Hea</span><span className="thick">lth</span>
              </NavLink>
           
            </div>

            <div className="link-6">
              <NavLink to="/Nutrination" activeClassName="active">
                <span className="thin">NU</span><span className="thick">trition</span>
              </NavLink>
             
            </div>

            <div className="link-7">
              <NavLink to="/Running" activeClassName="active">
                <span className="thin">RUN</span><span className="thick">ning</span>
              </NavLink>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
