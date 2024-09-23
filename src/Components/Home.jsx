import React, { useEffect } from 'react';
import img1 from '../Assests/home1.webp';
import img2 from '../Assests/home2.webp';
import img3 from '../Assests/Home5.webp';
import img6 from '../Assests/mainbir1.webp';
import img7 from '../Assests/mainni1.webp';
import img8 from '../Assests/mainhamp1.webp';
import img9 from '../Assests/mainexotc1.webp';
import img10 from '../Assests/mainplant1.webp';
import img11 from '../Assests/mainf2.webp';
import { Col, Row } from 'react-bootstrap';
import img12 from '../Assests/trendimg1.webp';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Sidenav from './Sidenav';
import { Link } from 'react-router-dom';

function Home() {
  
  // Disable horizontal overflow on body
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto'; // Reset on component unmount
    };
  }, []);

  return (
    <div>
      <Row>
        {/* Fixed Sidenav */}
        <Col
          sm={2}
          className="fixed-top h-100"
          style={{
            backgroundColor: '#9a9ae4',
            paddingTop: '20px',
            paddingBottom: '20px',
            left: 0,
            zIndex: 1000,
            overflowY: 'hidden',
            overflowX:'hidden',
            width:'250px'
          }}
        >
          <Sidenav />
        </Col>

        {/* Main Content */}
        <Col sm={10} style={{ marginLeft: '13.66%', padding: '0' }}>
          {/* Carousel */}
          <div className="navbar m-5">
            <div className="nav-item">
          <Link to="/birthday"> <img className="nav-icon" src="https://res.cloudinary.com/interflora/assets/svg-icons/birthday_tiles.svg" style={{width:'50px'}}  alt="Birthday Flowers"/><br/>
                <span>Birthday Flowers</span></Link> 
            </div>
            <div className="nav-item">
            <Link to="/anniversary"><img className="nav-icon" src="https://res.cloudinary.com/interflora/assets/svg-icons/anniversary_tiles.svg" style={{width:'50px'}} alt="Anniversary Flowers"/><br/>
                <span>Anniversary Flowers</span></Link> 
            </div>
            <div className="nav-item">
            <Link to="/gift-hamper"><img src="https://res.cloudinary.com/interflora/assets/svg-icons/gift_hampers_tiles.svg"  style={{width:'50px'}} alt="Gift Hampers" className="nav-icon" /><br/>
                <span>Gift Hampers</span></Link> 
            </div>
            <div className="nav-item">
            <Link to="/wedding"><img src="https://res.cloudinary.com/interflora/assets/svg-icons/luxury_collection_tiles.svg"  style={{width:'50px'}} alt="Exotic Blooms" className="nav-icon" /><br/>
                <span>Exotic Blooms</span></Link> 
            </div>
            <div className="nav-item">
            <Link to="/birthday"> <img  src="https://res.cloudinary.com/interflora/assets/svg-icons/plants_tiles_v1.svg" style={{width:'50px'}} alt="Plant Gifts" className="nav-icon" /><br/>
                <span>Plant Gifts</span></Link> 
            </div>
            <div className="nav-item">
            <Link to="/anniversary"> <img  src="https://res.cloudinary.com/interflora/assets/svg-icons/new_arrivals_tiles.svg" style={{width:'50px',paddingLeft:'0px'}} alt="New Arrivals" className="nav-icon" /><br/>
                <span>New Arrivals</span></Link>
            </div>
            <div className="nav-item">
            {/* <i class="fa-solid fa-truck"></i> */}
            <Link to="/"><img  src="https://res.cloudinary.com/interflora/assets/svg-icons/same_day_delivery_tiles.svg" style={{width:'50px'}}  alt="Same Day Flower Delivery"></img><br/>
                <span>Same Day Delivery</span></Link>
            </div>
        </div>

          <div id="carouselExampleIndicators" className="carousel slide ml-5 mr-0" data-bs-ride="carousel" data-bs-interval="1000">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="img" style={{borderRadius:'20px'}}/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="img1" style={{borderRadius:'20px'}}/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="img2" style={{borderRadius:'20px'}}/>
    </div>
    
  </div>
</div>

          <br />
          <br />

          {/* First Set of Categories */}
          <div className="container">
            <div className="row">
              <div className="col-sm-4 text-center">
               <Link to='/birthday'> <img src={img11}  alt="Subscription" className="img-fluid mx-auto img-thumbnail img-thumbnail" style={{width:'80%',height:'300px'}}/></Link>
                <h5 className="txtcol mt-3">Birthday Bouquets </h5>
              </div>
              <div className="col-sm-4 text-center">
              <Link to='/anniversary'>  <img src={img6} alt="Birthday" className="img-fluid mx-auto img-thumbnail" style={{width:'80%',height:'300px'}}/></Link>
                <h5 className="txtcol mt-3">Anniversary Bouquets</h5>
              </div>
              <div className="col-sm-4 text-center">
              <Link to='/gift-hamper'> <img src={img7} alt="Anniversary" className="img-fluid mx-auto img-thumbnail" style={{width:'80%',height:'300px'}}/></Link>
                <h5 className="txtcol mt-3"> Subscription </h5>
              </div>
            </div>
          </div>

          {/* Second Set of Categories */}
          <div className="container">
            <div className="row">
              <div className="col-sm-4 text-center">
              <Link to='/gift-hamper'><img src={img8} alt="Gift Hampers" className="img-fluid mx-auto img-thumbnail" style={{width:'80%',height:'300px'}} /></Link>
                <h5 className="txtcol mt-3">Gift Hampers</h5>
              </div>
              <div className="col-sm-4 text-center">
              <Link to='/wedding'> <img src={img9} alt="Exotic Blooms" className="img-fluid mx-auto img-thumbnail" style={{width:'80%',height:'300px'}}/></Link>
                <h5 className="txtcol mt-3">Exotic Blooms</h5>
              </div>
              <div className="col-sm-4 text-center">
              <Link to='/anniversary'><img src={img10} alt="Plant Gifts" className="img-fluid mx-auto img-thumbnail" style={{width:'80%',height:'300px'}}/></Link>
                <h5 className="txtcol mt-3 mb-5">Plant Gifts</h5>
              </div>
            </div>
          </div>

          {/* Trend Image */}
          <div className="container-fluid">
            <img
              src={img12}
              alt="img"
              className="img-fluid"
              style={{ width: '100vw', height: '600px', margin: 0 }} // Full width for image
            />
          </div>

          {/* Social Media Icons */}
          <div
            className="txt2 mt-4"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <a
              href="https://www.facebook.com/InterfloraIndia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={50} className="rounded-circle bg-light p-2" />
            </a>
            <a
              href="https://www.instagram.com/interfloraindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={50} className="rounded-circle  p-2" style={{color: '#fbad50' }} />
            </a>
            <a
              href="https://www.linkedin.com/company/interfloraindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={50} className="rounded-circle bg-light p-2" />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;