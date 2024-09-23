import React, { useState } from 'react';
import { useCart } from '../order/CartContext';
import '../App.css'; // Import the CSS file

const PlaceOrder = () => {
  const { cart, dispatch } = useCart();
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Here you could send the orderDetails to a backend server
    setOrderPlaced(true);
    dispatch({ type: 'CLEAR_CART' }); // Clear the cart after placing order
  };

  if (orderPlaced) {
    return <h2 className="order-placed-message">Order placed! Thank you for shopping with us.</h2>;
  }

  return (
    <div className="place-order-container" style={{marginTop:'160px'}}>
      <h2>Place Order</h2>
      <div>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={orderDetails.name} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="phone" 
          placeholder="Phone" 
          value={orderDetails.phone} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="address" 
          placeholder="Address" 
          value={orderDetails.address} 
          onChange={handleChange} 
        />
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default PlaceOrder;
