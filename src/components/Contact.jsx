import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <motion.h1
      id="contact"
        className="contact-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }} // Allows the animation to trigger multiple times when the element comes into the viewport.
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="contact-cards-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
      >
        {/* Phone Card */}
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
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
        </motion.div>

        {/* Email Card */}
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
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
        </motion.div>
      </motion.div>

      <motion.footer
        className="contact-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <p>&copy; {new Date().getFullYear()} Manigandan N. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Contact;