import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 

function Signup() {
  return (
    <div className="login-container">
      <form className="login-form">
      <div className="col-md-6">
          <label htmlFor="FirstName" className="form-label">FirstName</label>
          <input type="text" className="form-control" id="FirstName" placeholder="FirstName"   style={{ marginBottom: '1rem', marginLeft: '3rem' }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="LastName" className="form-label">LastName</label>
          <input type="text" className="form-control" id="LastName" placeholder="LastName"   style={{ marginBottom: '1rem', marginLeft: '3rem' }}   />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email address</label>
          <input type="email" className="form-control" id="inputEmail4"  style={{ marginBottom: '1rem' }}  />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4"   style={{ marginBottom: '1rem', marginLeft: '3rem' }}  />
        </div>
        <div className="col-12">
        <button type="submit" className="btn btn-primary">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Sign up</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
