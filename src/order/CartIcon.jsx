import React from 'react';
import { useCart } from '../order/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Ensure you have react-icons installed
import '../App.css'; // Import a CSS file for styles

const CartIcon = () => {
  const { cart } = useCart();

  // Calculate total items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-icon">
      <FaShoppingCart size={30} />
      {totalItems > 0 && (
        <span className="cart-badge">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
