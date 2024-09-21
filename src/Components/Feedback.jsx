import React, { useState } from 'react';
import '../App.css';
import Sidenav from './Sidenav';

function Feedback() {
  const [mood, setMood] = useState(null);
  const [rating, setRating] = useState(null);
  const [bestFeature, setBestFeature] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleMoodChange = (selectedMood) => {
    setMood(selectedMood);
  };

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleFeatureChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setBestFeature([...bestFeature, value]);
    } else {
      setBestFeature(bestFeature.filter((feature) => feature !== value));
    }
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Mood:', mood);
    console.log('Rating:', rating);
    console.log('Best Feature:', bestFeature);
    console.log('Feedback:', feedback);
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <div className="row" style={{ margin: 0 }}>
        {/* Sidebar */}
        <div className="col-2"
          style={{
            backgroundColor: '#3aa87b',
            paddingTop: '20px',
            paddingBottom: '20px',
            height: '100vh',
            overflowY: 'hidden'
          }}>
          <Sidenav />
        </div>

        {/* Main Content */}
        <div className="col-10" style={{ marginTop: '60px', padding: '20px' }}>
          <div className="feedback-container">
            <h2>Feedback</h2>
            <form onSubmit={handleSubmit}>
              <div className="question">
                <p>How would you describe your mood after using our product for the first time?</p>
                <div className="mood-options">
                  <button type="button" onClick={() => handleMoodChange('happy')}>
                    😊
                  </button>
                  <button type="button" onClick={() => handleMoodChange('neutral')}>
                    😐
                  </button>
                  <button type="button" onClick={() => handleMoodChange('sad')}>
                    😔
                  </button>
                </div>
              </div>

              <div className="question">
                <p>How would you rate the quality of our product?</p>
                <div className="rating-options">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <label key={value}>
                      <input
                        type="radio"
                        name="rating"
                        value={value}
                        checked={rating === value}
                        onChange={() => handleRatingChange(value)}
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </div>

              <div className="question">
                <p>Which feature is the best for you?</p>
                <div className="feature-options">
                  <label>
                    <input
                      type="checkbox"
                      value="Integration options and tools"
                      checked={bestFeature.includes('Integration options and tools')}
                      onChange={handleFeatureChange}
                    />
                    Integration options and tools
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="The advanced search functionality"
                      checked={bestFeature.includes('The advanced search functionality')}
                      onChange={handleFeatureChange}
                    />
                    The advanced search functionality
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="The customizable settings"
                      checked={bestFeature.includes('The customizable settings')}
                      onChange={handleFeatureChange}
                    />
                    The customizable settings
                  </label>
                </div>
              </div>

              <div className="question">
                <p>Your feedback</p>
                <textarea value={feedback} onChange={handleFeedbackChange} style={{ width: '100%', height: '100px' }} />
              </div>

              <button type="submit" className="submit-button">
                Send Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
