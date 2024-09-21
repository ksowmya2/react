import React from 'react';
import { productsData } from '../Data/Birthday'; 
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../App.css';

function Birthday1() {
  return (
    <Row className='maindata'>
      <h1 className='food1'>Birthday Flowers</h1>
      {productsData.map((e) => (
        <Col sm={3} key={e.id} className="mb-4">
          <Card className="card" style={{ width: '100%' }}>
            
            <Link to={`/birthday/${e.id}`}>
              <Card.Img variant="top" src={e.image} alt={e.name} className="card-img" style={{ height: '400px', objectFit: 'cover' }} />
            </Link>
            <Card.Body>
              <Link to={`/birthday/${e.id}`}>
                <Card.Title>{e.name}</Card.Title>
              </Link>
              <Card.Text>
                Price: ₹{e.Price}
              </Card.Text>
              <Button className="card-button" variant="primary" onClick={() => handleAddToCart(e.id)}>Order</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

const handleAddToCart = (productId) => {
  console.log(`Product ${productId} order.`);
};



export default Birthday1