import React, { createContext, useReducer, useContext } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Initial state for the cart
const initialState = [];

// Reducer function for cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemExists = state.find(item => item.id === action.payload.id);
      if (itemExists) {
        // If the item is already in the cart, increase its quantity
        return state.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the item is not in the cart, add it with quantity 1
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }
    case 'INCREASE_QUANTITY': {
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    case 'DECREASE_QUANTITY': {
      return state.map(item =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
    case 'REMOVE_FROM_CART': {
      return state.filter(item => item.id !== action.payload.id);
    }
    default:
      return state;
  }
};

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
