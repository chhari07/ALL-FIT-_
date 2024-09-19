import React from 'react';
import './CardGrid.css';

const CardGrid = () => {
  return (
    <div className="card-container">
      {/* Effect-1 */}
      <div className="crd crd--effect-1">
        <div
          className="crd-img"
          style={{
            backgroundImage:
              'url("https://uxdt.nic.in/wp-content/uploads/2021/12/fit-india-fit-india-01-01.jpg?x69772")',
          }}
        ></div>
        <div className="crd-info">
          <h2 className="crd-heading">FIT INDIA </h2>
          <p className="crd-text">And then that begins...</p>
        </div>
      </div>

      {/* Effect-2 */}
      <div className="crd crd--effect-2">
        <div
          className="crd-img"
          style={{
            backgroundImage:
              'url("  https://apacnewsnetwork.com/wp-content/uploads/2023/09/Health-Ministry-launches-PRIP-scheme-for-pharma-and-medical-devices-sector.jpg")',
          }}
        ></div>
        <div className="crd-info">
          <h2 className="crd-heading">Wolken</h2>
          <p className="crd-text">And then that begins...</p>
        </div>
      </div>

      {/* Effect-3 */}
      <div className="crd crd--effect-3">
        <div
          className="crd-img"
          style={{
            backgroundImage:
              'url("https://ayushnext.ayush.gov.in/userfiles/images/Ministry-of-AYUSH.jpg")',
          }}
        ></div>
        <div className="crd-info">
          <h2 className="crd-heading"></h2>
          <p className="crd-text">    </p>
        </div>
      </div>

      {/* Effect-4 */}
      <div className="crd crd--effect-4">
        <div
          className="crd-img"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1523441888894-57962297f940?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800")',
          }}
        ></div>
        <div className="crd-info">
          <h2 className="crd-heading">Keine Worte.</h2>
          <p className="crd-text">And then that begins...</p>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
