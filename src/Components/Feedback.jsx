import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './App.css'; // Import your custom CSS file

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container className="feedback-container">
      <h2 className="text-center mb-4">Feedback Form</h2>
      <Form onSubmit={handleSubmit} className="feedback-form">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="custom-input"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="custom-input"
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Feedback</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Your feedback here..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
            className="custom-textarea"
          />
        </Form.Group>

        <Button variant="success" type="submit" className="mt-3 custom-button">
          Submit Feedback
        </Button>
      </Form>
    </Container>
  );
};

export default FeedbackForm;
