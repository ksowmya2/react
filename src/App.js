// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Birthday from './Pages/Birthday1';
import Wedding from './Pages/Wedding1';
import Anniversary from './Pages/Anniversary1';
import Gift from './Pages/Gift1';
import Feedback from './Components/Feedback';
import Location from './Components/Location';
import Customization from "./Components/Customization";
import ProductDetail from './Pages/Productdetail'; 
import PlaceOrder from "./order/Placeorder";
import Cart from "./order/Cart";
import { CartProvider } from './order/CartContext';

function App() {
  return (
   <CartProvider>
    <Router>
      <div>
        {/* Define your routes inside Routes */}
        <Routes>
         
          <Route path="/react" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
          <Route path='/birthday' element={<Birthday />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/anniversary" element={<Anniversary />} />
          <Route path="/gift-hamper" element={<Gift />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/location" element={<Location />} />
          <Route path="/customization" element={<Customization />} />
          <Route path="/birthday/:id" element={<ProductDetail />} />
        <Route path="/anniversary/:id" element={<ProductDetail />} />
        <Route path="/wedding/:id" element={<ProductDetail />} />
        <Route path="/gift-hamper/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />

        </Routes>
      </div>
    </Router>
    </CartProvider>
    
  );
}

export default App;
