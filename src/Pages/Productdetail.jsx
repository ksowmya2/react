import React from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../Data/Birthday';
import { productsData1 } from '../Data/Anniversary'; // Ensure this is the correct path
import { productsData2 } from '../Data/Wedding'; // Ensure this is the correct path
import { productsData3 } from '../Data/Gift'; // Ensure this is the correct path
import { useCart } from '../order/CartContext'; // Import useCart hook for cart management

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart(); // Access dispatch function from CartContext

  const allProducts = [
    ...productsData,
    ...productsData1,
    ...productsData2,
    ...productsData3,
  ];
  const product = allProducts.find(p => p.id === parseInt(id));

  // Function to add product to cart
  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product }); // Dispatch add-to-cart action
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px', justifyContent: 'center', alignItems: 'center', paddingTop: '7%', color: '#ff1d58', fontFamily: 'cursive', marginBottom: '1%' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ height: '400px', width: '300px', objectFit: 'cover' }} />
      <h2 style={{ color: '#3aa87b' }}>Price: ₹{product.Price}</h2>
      <button onClick={handleAddToCart} style={{ padding: '10px 20px', backgroundColor: '#F7882F', color: 'white', border: 'none', borderRadius: '5px' }}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetail;
