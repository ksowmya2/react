import React from 'react';
import Sidenav from './Sidenav';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import '../App.css';
import img22 from '../Assests/contactimg.svg'
import { Col, Row } from 'react-bootstrap';

function Location() {
  return (
    <div>
      <Row>
       
        <Col sm={2}
          className="fixed-top h-100"
          style={{
            backgroundColor: '#9a9ae4',
            paddingTop: '20px',
            paddingBottom: '20px',
            height: '100vh',
            overflow: 'hidden',
            width:'250px'

          }}>
          
          <Sidenav />
        </Col>

      
        <Col sm={10} style={{ marginLeft: '16.66%', padding: '0',  overflowX:'hidden' }}>
      
        <h2 className="location-heading mt-4">Location</h2>
               <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15315396.169605643!2d69.93853833042493!3d20.419537884410843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80c753a98f3%3A0x4525072cdc36d90e!2sInterflora%20India%20-%20The%20Flower%20Experts!5e0!3m2!1sen!2sin!4v1726722144773!5m2!1sen!2sin"
          width="100%"
          height="500px"
          style={{ border: '0',overflow:'hidden' }} 
          className="map-iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="contact-container" style={{overflow:'hidden' ,marginBottom:'100px'}}>
          <h1 className="contact-heading" style={{textAlign:'center',fontSize:'50px'}}>Contact Us</h1>
          <p className="contact-paragraph">Have a query? Need assistance? Simply reach out for answers. We love staying in touch with you!</p>

          <div className="info">
            <p><strong>Email:</strong> <a href="mailto:support@interflora.in">support@interflora.in</a></p>
            <p><strong>Phone:</strong></p>
            <p> +91 (22) 3965-0333 / +91 (22) 4343-3300</p>
            <p>(9 AM to 10 PM IST throughout the week)</p>
          </div>

          <div className="info info1">
            <div>
            <p><strong>Address:</strong></p>
            <p>Unit No. 2, A Wing, 2nd Floor, Times Square Building,</p>
            <p>Andheri Kurla Road, Marol,</p>
            <p>Andheri East, Mumbai-400059, Maharashtra</p>
            </div>
            <div>
              <img src={img22} alt='img' />
            </div>
          </div>

          <div className="text-center social-icons">
            <a href="https://www.facebook.com/InterfloraIndia/" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaFacebook size={50} className="rounded-circle p-2" />
            </a>
            <a href="https://www.instagram.com/interfloraindia/" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaInstagram size={50} className="rounded-circle  p-2" />
            </a>
            <a href="https://www.linkedin.com/company/interfloraindia/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={50} className="rounded-circle  p-2" />
            </a>
          </div>
        </div>
        </Col>
        </Row>
      </div>
    
  );
}

export default Location;
