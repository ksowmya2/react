import React from 'react';
import { useCart } from '../order/CartContext'; // Import your custom cart context
import { Col, Row, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // For navigation after place order
import Sidenav from '../Components/Sidenav';
import '../App.css'; // Import the CSS file

const Cart = () => {
  const { cart, dispatch } = useCart(); // Get cart and dispatch function from the context
  const navigate = useNavigate(); // For redirecting to the place order page

  // Calculate the total items and total price in the cart
  const getTotalItems = () => cart.reduce((acc, item) => acc + item.quantity, 0);
  const getTotalPrice = () => cart.reduce((acc, item) => acc + item.Price * item.quantity, 0);

  // Handle the Place Order button click
  const handlePlaceOrder = () => {
    navigate('/placeorder'); // Redirect to the place order page
  };

  return (
    <div>
      <Row>
        {/* Fixed Sidenav */}
        <Col sm={2} className="fixed-sidenav">
          <Sidenav />
        </Col>

        {/* Main Content */}
        <Col sm={10} className="main-content"
        style={{overflowX:'hidden'}}>
          <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <strong>{item.name}</strong>
                        <p>₹{item.Price}</p>
                      </div>
                    </div>
                    <div className="cart-item-buttons">
                      <button 
                        onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: { id: item.id } })}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: { id: item.id } })}
                      >
                        +
                      </button>
                      <button 
                        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } })}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="cart-summary">
                  <h3>Total Items: {getTotalItems()}</h3>
                  <h3>Total Price: ₹{getTotalPrice()}</h3>
                </div>
                <div>
                  <Button 
                    onClick={handlePlaceOrder} 
                    className="place-order-btn"
                  >
                    Place Order
                  </Button>
                </div>
              </>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
