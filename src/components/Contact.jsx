import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-cards-container">
        {/* Phone Card */}
        <div className="contact-card">
          <div className="contact-logo">
            <FaPhoneAlt className="contact-icon" />
          </div>
          <div className="contact-label">
            <strong>Phone:</strong>
          </div>
          <div className="contact-content">
            <a href="tel:+919442108507" className="contact-link">
              +91 9442108507
            </a>
          </div>
        </div>

        {/* Email Card */}
        <div className="contact-card">
          <div className="contact-logo">
            <FaEnvelope className="contact-icon" />
          </div>
          <div className="contact-label">
            <strong>Email:</strong>
          </div>
          <div className="contact-content">
            <a href="mailto:nachiappanmanigandan@gmail.com" className="contact-link">
              nachiappanmanigandan@gmail.com
            </a>
          </div>
        </div>
      </div>
      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} Manigandan N. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;