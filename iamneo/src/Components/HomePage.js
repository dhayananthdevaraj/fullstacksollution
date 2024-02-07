import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      <h2>Welcome to IamNeo</h2>
      <p>We offer innovative solutions for businesses around the world.</p>

      <div className="solutions">
        <div className="solution">
          <h3>For Universities</h3>
          <p>From conducting semester examinations, on-to-go to automating computer labs and end-to-end placement automation - we've built solutions that cater to all your operational needs.</p>
          <a href="/universities">View Solutions</a>
          <img className="solution-image" src="https://iamneo.ai/wp-content/uploads/2023/05/for-educational.svg" alt="University Solution" />
        </div>
        <div className="solution">
          <h3>For Corporates</h3>
          <p>From helping you build a diverse campus talent pipeline to recruitment automation, ELTP and workforce upskilling - our tailor-made corporate solutions have got all the answers for you.</p>
          <a href="/corporates">View Solutions</a>
          <img className="solution-image" src="https://iamneo.ai/wp-content/uploads/2023/05/for-corporates.svg" alt="Corporate Solution" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
