import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Let’s Talk</h2>
        <p>Phone<br /><a href="tel:+917010045799">+91 70100 45799</a></p>
        <p>Mail<br /><a href="mailto:kalki@iamneo.ai">kalki@iamneo.ai</a></p>
        <p>Address<br />iamneo<br />1205/A, 3rd Floor,<br />SPA SRR Towers, Avinashi Rd,<br />Pappanaickenpalayam,<br />Tamil Nadu 641037</p>
      </div>
      <div className="contact-form">
        <h2>Looking for a solution?</h2>
        <p>We’d love to hear from you.</p>
        <form>
          <input type="text" placeholder="Work Email ID *" required />
          <input type="text" placeholder="Company Name *" required />
          <input type="text" placeholder="Designation" />
          <input type="text" placeholder="First Name *" required />
          <input type="text" placeholder="Last Name" />
          <select name='country' >
            <option value="">Country *</option>
            <option value="Afghanistan">Afghanistan</option>
            {/* Add more countries here */}
          </select>
          <input type="tel" placeholder="Phone *" required />
          <textarea placeholder="Message *" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
