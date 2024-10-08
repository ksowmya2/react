import React from 'react';
import '../App.css';


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
            overflow: 'hidden',
            zIndex: 1000,
            width: '250px'
          }}>
          <Sidenav />
        </div>

        {/* Main Content */}
        <div className="col-10" style={{  padding: '10px', marginLeft: '17%',overflowY:'hidden',height:'100vh' }}>
          <div className='custimg' style={{ position: 'relative' }}>
            {/* Darkened Background Image */}
            <div 
              style={{ 
               
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                width: '100%', 
                height: '600px', 
                position: 'relative',
                filter: 'brightness(50%)',  // Darkens the image
              }}>
            </div>

            {/* Text Overlay */}
            <div className='container-fluid custtxt' 
              style={{
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center', 
                color: 'white'  // White text for better contrast
              }}>
              <h1>FLORIST STORE</h1>
              <p style={{ fontSize: '16px' }}>
                Send the best token of love. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, impedit.
              </p>
              <h1 style={{ fontFamily: 'Lucida Handwriting, cursive', fontSize: '24px' }}>
                Beautiful Flowers
              </h1>
              <button   className='hover-button' style={{ backgroundColor: '#0a4749', border: 'none', padding: '10px 20px', color: 'white', fontSize: '18px' }}>
                50% Discount
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customization;
