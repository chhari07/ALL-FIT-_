import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className="services-container">
      {/* Card 1 */}
      <div className="plan">
        <div className="inner">
          <span className="pricing">
            <span>
			₹99 <small>/ m</small>
            </span>
          </span>
          <p className="title"> PLAN 1 </p>
          <p className="info">This plan is for Students.</p>
          <ul className="features">
            <li>
              <span className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              <span><strong> ONE/TWO time call to trainer </strong> </span>
            </li>
            <li>
              <span className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              <span> <strong> Trainer will provide all the diet chart and exericse chart with vedios form </strong></span>
            </li>
            <li>
             
            </li>
          </ul>
          <div className="action">
            <a className="button" href="#">
              Choose plan
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="plan">
        <div className="inner">
          <span className="pricing">
            <span>
			₹199  <small>/ m</small>
            </span>
          </span>
          <p className="title">PLAN 2</p>
       
          <ul className="features">
            <li>
              <span className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              <span><strong> One call per day  </strong> </span>
            </li>
            <li>
              <span className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              <span> <strong> measure montly progress of client/user  </strong></span>
            </li>
            <li>
              <span className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              <span> assisting them on vedio chats   </span>
            </li>
          </ul>
          <div className="action">
            <a className="button" href="#">
              Choose plan
            </a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="plan">
        <div className="inner">
          <span className="pricing">
            <span>
			₹299    <small>/ m</small>
            </span>
          </span>
          <p className="title">PLAN 3</p>
       
          <ul className="features">
            <li>
              <span className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              <span><strong>2-call per day     </strong></span>
            </li>
            <li>
              <span className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              <span> <strong> chat question services(text and vedio)  </strong></span>
            </li>
            <li>
              <span className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              <span>measure weakly progress </span>
            </li>
          </ul>
          <div className="action">
            <a className="button" href="#">
              Choose plan
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
