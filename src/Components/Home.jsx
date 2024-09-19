import React from 'react';
import img1 from '../Assests/home1.webp';
import img2 from '../Assests/home2.webp';
import img3 from '../Assests/Home5.webp';
import { Col, Row } from 'react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel';
import img6 from '../Assests/mainbir1.webp'
import img7 from '../Assests/mainni1.webp'
import img8 from '../Assests/mainhamp1.webp'
import img9 from '../Assests/mainexotc1.webp'
import img10 from '../Assests/mainplant1.webp'
import img11 from '../Assests/mainf2.webp'
import img12 from '../Assests/trendimg1.webp'
function Home() {
  return (
  <div>
      {/* <div className='container'>
       <div className='row'>
        <div className='col-sm-2'>
          <h>Same Day Delivery</h>
        </div>
        <div className='col-sm-2'>
        <h5>Birthday Flowers</h5>
        </div>
        <div className='col-sm-2'>
        <h5>Anniversary Flowers</h5>
        </div>
        <div className='col-sm-2'>
        <h5>Gift Hampers</h5>
        </div>
        <div className='col-sm-2'>
        <h5>Exotic Blooms</h5>
        </div>
        <div className='col-sm-2'>
        <h5>Plant Gifts</h5>
        </div>
      </div>
  </div> */}
         <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="img"/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="img1"/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="img2"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br/>
<br/>
<div className="container">
      <div className="row ">
        <div className="col-sm-4  text-center">
          <div className="card">
            <img 
              src={img11} 
              alt="Subscription" 
              className="card-img-top img-fluid mx-auto" 
              style={{ width: '80%', height: '200px' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Subscription</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4  text-center">
          <div className="card">
            <img 
              src={img6} 
              alt="Birthday" 
              className="card-img-top img-fluid mx-auto" 
              style={{ width: '80%', height: '200px' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Birthday</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4  text-center">
          <div className="card">
            <img 
              src={img7} 
              alt="Anniversary" 
              className="card-img-top img-fluid mx-auto" 
              style={{ width: '80%', height: '200px' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Anniversary</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-4 text-center">
          <div className="card">
            <img 
              src={img8} 
              alt="Gift Hampers" 
              className="card-img-top img-fluid mx-auto" 
              style={{ width: '80%', height: '200px' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Gift Hampers</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4 text-center">
          <div className="card">
            <img 
              src={img9} 
              alt="Exotic Blooms" 
              className="card-img-top img-fluid mx-auto" 
              style={{ width: '80%', height: '200px' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Exotic Blooms</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-4 text-center">
          <div className="card">
            <img 
              src={img10} 
              alt="Plant Gifts" 
              className="card-img-top img-fluid mx-auto" 
              style={{ width: '80%', height: '150px' }} 
            />
            <div className="card-body">
              <h5 className="card-title text-primary mb-5">Plant Gifts</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid mt-5">
        <img src={img12} alt="img" className="img-fluid" style={{ width: '100%', height: '400px' }}  />
      </div>
    </div>
    


  );
}

export default Home;
