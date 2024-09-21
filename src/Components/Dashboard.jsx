import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productsData } from '../Data/Birthday'; 
import Sidenav from './Sidenav';
import '../App.css';
import { productsData1 } from '../Data/Anniversary';
import { productsData2 } from '../Data/Wedding';
import { productsData3 } from '../Data/Gift';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Dashboard() {
  const birPreview = productsData.slice(0, 3); 
  const anniPreview = productsData1.slice(0, 3); 
  const wedPreview = productsData2.slice(0, 3);     
  const giftPreview = productsData3.slice(0, 3);  

  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} ordered.`);
  };

  const renderProductSection = (sectionTitle, products, productType) => (
    <>
      <h2 className='category-title'>{sectionTitle}</h2>
      <Row className="maindata">
        {products.map((e) => (
          <Col sm={4} key={e.id} className="mb-4">
            <Link to={`/${productType}/${e.id}`}>
              <img 
                src={e.image} 
                alt={e.name} 
                style={{ height: '300px', width: '80%', objectFit: 'cover', borderRadius: '8px' }} 
              />
            </Link>
            <h4>{e.name}</h4>
            <p>Price: ₹{e.Price}</p>
            <Link to={`/${productType}/${e.id}`}>
              <Button 
                variant="success" 
                onClick={() => handleAddToCart(e.id)} 
                style={{ 
                  backgroundColor: '#3aa87b', 
                  color: 'white', 
                  transition: 'background-color 0.3s ease' ,borderRadius:'10px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#198754')}
              >  <i className="fas fa-cart-shopping"></i>
               Add To Cart
              </Button>
            </Link>
          </Col>
        ))}
      </Row>
      <Col sm={12} className="text-center mt-3 ml-5">
        <Link to={`/${productType}`}>
          <Button 
            variant="success" 
            style={{ 
              backgroundColor: '#3d6e59', 
              color: 'white', 
              transition: 'background-color 0.3s ease',width: '150px', borderRadius:'20px', marginLeft:'500px'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#198754')}
          >
            View More
          </Button>
        </Link>
      </Col>
    </>
  );

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ position: 'fixed', width: '250px', height: '100%', overflow: 'hidden' }}>
        <Sidenav />
      </div>
      <div style={{ flex: 1, padding: '5%', marginLeft: '250px', overflow: 'hidden' }}>
        {renderProductSection('Birthday Bouquets', birPreview, 'birthday')}
        {renderProductSection('Anniversary Flowers', anniPreview, 'anniversary')}
        {renderProductSection('Wedding Flowers', wedPreview, 'wedding')}
        {renderProductSection('Gift Hampers', giftPreview, 'gift-hamper')}
      </div>
    </div>
  );
}

export default Dashboard;
