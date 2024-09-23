import React from 'react'; 
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../App.css';
import { productsData2 } from '../Data/Wedding';
import { useCart } from '../order/CartContext'; // Import useCart for cart management
import CartIcon from '../order/CartIcon'; 

function Wedding1() {
  const { dispatch } = useCart(); // Access dispatch function from CartContext

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product }); // Dispatch add-to-cart action
  };

  return (
    <div><div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <CartIcon /> 
        </div>
    <Row className='maindata'>
      <h1 className='food1' style={{textAlign:'center',color:'#ff1d58',marginTop:'20px',fontFamily:'cursive'}}>Wedding Flowers</h1>
      {productsData2.map((e) => (
        <Col sm={4} key={e.id} className="mb-4">
          <Card className="card" style={{ width: '80%', margin: 'auto' }}>
            <Link to={`/wedding/${e.id}`}>
              <Card.Img variant="top" src={e.image} alt={e.name} className="card-img" style={{ height: '400px', objectFit: 'cover' }} />
            </Link>
            <Card.Body>
              <Link to={`/wedding/${e.id}`}>
                <Card.Title style={{ textAlign: 'center', color:'#28a745' }}>{e.name}</Card.Title>
              </Link>
              <Card.Text style={{ textAlign: 'center', color:'#3aa87b' }}>
                Price: ₹{e.Price}
              </Card.Text>
              <div className="d-flex text-align-center">
                <Button 
                  style={{ alignItems: 'center', textAlign: 'center', backgroundColor:'#F7882F', color:'white' }} 
                  className="card-button" 
                  variant="primary" 
                  onClick={() => handleAddToCart(e)} // Pass the entire product object
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

export default Wedding1;
