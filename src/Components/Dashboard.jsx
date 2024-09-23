import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productsData } from '../Data/Birthday'; 
import Sidenav from './Sidenav';
import '../App.css';
import { productsData1 } from '../Data/Anniversary';
import { productsData2 } from '../Data/Wedding';
import { productsData3 } from '../Data/Gift';
import { useCart } from '../order/CartContext'; // Import the useCart hook

function Dashboard() {
  const birPreview = productsData.slice(0, 3); 
  const anniPreview = productsData1.slice(0, 3); 
  const wedPreview = productsData2.slice(0, 3);     
  const giftPreview = productsData3.slice(0, 3);  

  const { dispatch } = useCart(); // Get the dispatch function from the cart context

  // This function adds the product to the cart
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product }); // Dispatch the action to add the product to the cart
  };

  const renderProductSection = (sectionTitle, products, productType) => (
    <>
      <h2 className='category-title'>{sectionTitle}</h2>
      <Row className="maindata"
      style={{ 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
        padding: '10px', 
        transition: 'transform 0.2s',
        backgroundColor:'#e1e8f0'
      }}>
        {products.map((e, index) => (
          <Col sm={4} key={e.id} className="mb-4">
            <div 
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Link to={`/${productType}/${e.id}`}>
                <img 
                  src={e.image} 
                  alt={e.name} 
                  className='img-thumbnail'
                  style={{ height: '350px', width: '100%', objectFit: 'fill', borderRadius: '8px' }} 
                />
              </Link>
              <h4 style={{textAlign:'center',color:'#198754'}}>{e.name}</h4>
              <p style={{textAlign:'center',color:'#198754'}}>Price: ₹{e.Price}</p>
              <Button 
                variant="success" 
                onClick={() => handleAddToCart(e)} // Pass the entire product object to the handleAddToCart function
                style={{ 
                  backgroundColor: '#3aa87b', 
                  color: 'white', 
                  transition: 'background-color 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#198754')}
              >
                <i className="fas fa-cart-shopping"></i>
                Add To Cart
              </Button>
  
              {/* Conditionally render the 'View More' button after the third product */} 
              {index === 2 && (
                <div className="mt-3 text-center">
                  <Link to={`/${productType}`}>
                    <Button 
                      variant="success" 
                      style={{ 
                        backgroundColor: '#FC4A1A' , 
                        color: 'white', 
                        transition: 'background-color 0.3s ease',
                        width: '150px'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#df4c41;')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ' #7aacce')}
                    >
                      View More <i className="fa-duotone fa-solid fa-arrow-right"></i>
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
  
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ position: 'fixed', width: '250px', height: '100%', overflow: 'hidden' }}>
        <Sidenav />
      </div>
      <div style={{ flex: 1, padding: '3%', marginLeft: '250px', overflow: 'hidden' }}>
        {renderProductSection('Birthday Bouquets', birPreview, 'birthday')}
        {renderProductSection('Anniversary Flowers', anniPreview, 'anniversary')}
        {renderProductSection('Wedding Flowers', wedPreview, 'wedding')}
        {renderProductSection('Gift Hampers', giftPreview, 'gift-hamper')}
      </div>
    </div>
  );
}

export default Dashboard;
