import React, { useState } from 'react';
import './css/Buynow.css';
const BuyNow = () => {
  // State to store user details
  const [userDetails, setUserDetails] = useState({
    address: '',
    quantity: 1,
  });

  // Handle input change for user details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  // Function to place order
  const placeOrder = () => {
    if (!userDetails.address || userDetails.quantity < 1) {
      alert('Please fill in all the details correctly.');
      return;
    }
    
    // Assuming placeOrderAPI is an API call to place the order
    console.log('Placing order with the following details:', userDetails);
    alert('Order placed successfully!');
    
    // Reset form after placing the order
    setUserDetails({
      address: '',
      quantity: 1,
    });
  };

  return (
    <div className="buy-now-container">
      <h2>Place Your Order</h2>
      <div className="form">
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={userDetails.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />
      </div>
      <div className="form-group">
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={userDetails.quantity}
          onChange={handleChange}
          min="1"
        />
      </div>
      <button onClick={placeOrder} className="place-order-button">
        Place Order
      </button>
    </div>
  );
};

export default BuyNow;
