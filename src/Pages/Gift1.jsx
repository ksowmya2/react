import React from 'react'; 
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../App.css';
import { productsData3 } from '../Data/Gift';

function Gift1() {
  return (
   
         <Row className='maindata'>
      <h1 className='food1'>Gift Hampers</h1>
      {productsData3.map((e) => (
        <Col sm={3} key={e.id} className="mb-4">
          <Card className="card" style={{ width: '100%' }}>
            
            <Link to={`/gift-hamper/${e.id}`}>
              <Card.Img variant="top" src={e.image} alt={e.name} className="card-img" style={{ height: '400px', objectFit: 'cover' }} />
            </Link>
            <Card.Body>
              <Link to={`/gift-hamper/${e.id}`}>
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
    
 

export default Gift1