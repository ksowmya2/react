import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productsData1 } from '../Data/Anniversary';
import { useCart } from '../order/CartContext'; // Import the useCart hook

function Anniversary1() {
  const { dispatch } = useCart(); // Get the dispatch function from the cart context

  // Function to handle adding an item to the cart
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product }); // Dispatch the action with the product
  };

  return (
    <Row className='maindata'>
      <h1 className='food1' style={{ textAlign: 'center', color: '#ff1d58', marginTop: '20px', fontFamily: 'cursive' }}>Anniversary Flowers</h1>
      {productsData1.map((e) => (
        <Col sm={4} key={e.id} className="mb-4">
          <Card className="card" style={{ width: '80%', margin: 'auto' }}>
            <Link to={`/anniversary/${e.id}`}>
              <Card.Img variant="top" src={e.image} alt={e.name} className="card-img" style={{ height: '400px', objectFit: 'fill' }} />
            </Link>
            <Card.Body>
              <Link to={`/anniversary/${e.id}`}>
                <Card.Title style={{ textAlign: 'center', color: '#28a745' }}>{e.name}</Card.Title>
              </Link>
              <Card.Text style={{ textAlign: 'center', color: '#3aa87b' }}>Price: ₹{e.Price}</Card.Text>
              <div className="d-flex justify-content-center">
                <Button
                  style={{ backgroundColor: '#F7882F', color: 'white' }}
                  onClick={() => handleAddToCart(e)} // Pass the entire product object to the handleAddToCart function
                >
                  Add To Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Anniversary1;
