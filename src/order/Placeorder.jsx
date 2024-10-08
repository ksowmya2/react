import React, { useState } from 'react';
import { useCart } from '../order/CartContext';
import '../App.css'; // Import the CSS file
import img80 from '../Assests/order121.jpg'; 

const PlaceOrder = () => {
  const {  dispatch } = useCart();
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Validate required fields
    if (!orderDetails.name || !orderDetails.phone || !orderDetails.address) {
      setError('All fields are required.');
      return;
    }

    // If all fields are filled, place the order
    setError('');
    setOrderPlaced(true);
    dispatch({ type: 'CLEAR_CART' }); // Clear the cart after placing order
  };

  
    if (orderPlaced) {
      return (
        <div className="order-confirmation">
          <h2 className="order-placed-message">Order placed! Thank you for shopping with us.</h2>
          <img 
            src={img80} 
            alt="Order confirmation" 
            className="order-placed-image" 
            style={{ marginTop: '20px', width: '300px', height: 'auto',marginLeft:'40%' }} 
          />
        </div>     );

  }

  return (
    <div className="place-order-container" style={{ marginTop: '160px' }}>
      <h2>Place Order</h2>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <div>
        <input 
          type="text" 
          name="name" 
          placeholder="Name"
          required 
          value={orderDetails.name} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="phone" 
          placeholder="Phone" 
          required
          value={orderDetails.phone} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="address" 
          placeholder="Address" 
          required
          value={orderDetails.address} 
          onChange={handleChange} 
        />
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default PlaceOrder;
