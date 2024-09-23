import React from 'react';
import '../App.css';
import img21 from '../Assests/backimg21.jpg';
import { Col, Row, Button } from 'react-bootstrap';
import Sidenav from './Sidenav';

function Customization() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div className="row" style={{ margin: 0 }}>
        {/* Sidebar */}
        <div className="col-2"
          style={{
            position: 'fixed',
            backgroundColor: '#9a9ae4',
            paddingTop: '20px',
            paddingBottom: '20px',
            height: '100vh',
            overflowY: 'hidden',
            zIndex: 1000,
            width:'250px'
          }}>
          <Sidenav />
        </div>

        {/* Main Content */}
        <div className="col-10" style={{ marginTop: '10px', padding: '20px',marginLeft:'20%' }}>
        <div className='custimg'>
          <div>
            <img src={img21} alt='txt' style={{ width: '100%', height: '600px', fontSize: '24px' }} />
          </div>
          <div className='container-fluid custtxt'>
            <h1>FLORIST STORE</h1>
            <p style={{ fontSize: '16px' }}>
              Send the best token of love. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, impedit.
            </p>
            <h1 style={{ fontFamily: 'Lucida Handwriting, cursive', fontSize: '24px' }}>
              Beautiful Flowers
            </h1>
            <button>50% Discount</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Customization;
