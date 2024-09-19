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
              <NavLink to="/yoga" activeClassName="active">
                <span className="thin">YO</span><span className="thick">GA</span>
              </NavLink>
            
            </div>

            <div className="link-3">
              <NavLink to="/mediation " activeClassName="active">
                <span className="thin">MEDI</span><span className="thick">ATION</span>
              </NavLink>
             
            </div>

            <div className="link-4">
              <NavLink to="/mentalhealth " activeClassName="active">
                <span className="thin">MENTAL</span><span className="thick">HEALTH</span>
              </NavLink>
             
            </div>

            <div className="link-5">
              <NavLink to="/goodfood " activeClassName="active">
                <span className="thin">GOOD</span><span className="thick">FOOD</span>
              </NavLink>
           
            </div>

           
            
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
