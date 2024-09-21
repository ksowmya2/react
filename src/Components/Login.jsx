import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" size={15} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control pass" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn ">
        <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }} >Login</Link>
        </button>
        <p style={{  textAlign:'center',color:'white' }}>Don't have an Account? <Link to='/signup' style={{ color: 'inherit', textDecoration: 'none', }}>Signup</Link> </p>
      </form>
     
    </div>
  );
};

export default Login;