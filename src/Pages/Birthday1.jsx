import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productsData } from '../Data/Birthday';
import { useCart } from '../order/CartContext'; // Import useCart hook
import CartIcon from '../order/CartIcon'; 

function Birthday1() {
  const { dispatch } = useCart(); // Get the dispatch function

  // Function to add product to cart
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product }); // Dispatch action with product
  };

  return (
    <div>
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <CartIcon /> 
        </div>
  
    <Row className='maindata'>
      <h1 className='food1' style={{ textAlign: 'center', color: '#ff1d58', marginTop: '20px', fontFamily: 'cursive' }}>Birthday Flowers</h1>
      {productsData.map((e) => (
        <Col sm={4} key={e.id} className="mb-4">
          <Card className="card" style={{ width: '80%', margin: 'auto' }}>
            <Link to={`/birthday/${e.id}`}>
              <Card.Img variant="top" src={e.image} alt={e.name} className="card-img" style={{ height: '380px', objectFit: 'fill' }} />
            </Link>
            <Card.Body>
              <Link to={`/birthday/${e.id}`}>
                <Card.Title style={{ textAlign: 'center', color: '#28a745' }}>{e.name}</Card.Title>
              </Link>
              <Card.Text style={{ textAlign: 'center', color: '#3aa87b' }}>Price: ₹{e.Price}</Card.Text>
              <div className="d-flex justify-content-center">
                <Button
                  style={{ backgroundColor: '#F7882F', color: 'white' }}
                  onClick={() => handleAddToCart(e)} // Pass the product object
                >
                  Add To Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default Birthday1;
