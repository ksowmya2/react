import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge,  faComment, faLocationDot,  faArrowRightFromBracket, faLeaf, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons
import Image1 from '../Assests/profile.jpg';  // Ensure the path is correct
import '../App.css'; 

const Sidenav = () => {
  return (
    <div className='sidenav'>
      <h2 className='head1'>Harry's Floral Bouquet</h2>
      <ul>
        <li>
          <Link to="/home">
            <FontAwesomeIcon icon={faLeaf} className="fa-icon" />&nbsp; Floral Charm
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faThLarge} className="fa-icon" />&nbsp; Dashboard
          </Link>
        </li>
        <li>
          <Link to="/customization">
            <FontAwesomeIcon icon={faHeart} className="fa-icon" />&nbsp; Design Your &nbsp; &nbsp;&nbsp;&nbsp; Bouquet
          </Link>
        </li>
        <li>
          <Link to="/feedback">
            <FontAwesomeIcon icon={faComment} className="fa-icon" />&nbsp; Feedback
          </Link>
        </li>
        <li>
          <Link to="/location">
            <FontAwesomeIcon icon={faLocationDot} className="fa-icon" />&nbsp; Location
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} className="fa-icon" />&nbsp; Cart
          </Link>
        </li>
      </ul>
      <div className='img'>
        <img src={Image1} alt='Profile' />
      </div>
      <div className='head-2'>
        <h4>Hello Candy</h4>
        <p>Bringing Blooms to Life, One Bouquet at a Time.</p>
      </div>
      <div className='log'>
        <Link to='/'>
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidenav;
