import React from "react";
import { motion } from "framer-motion";
import Me from "../assets/Me.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Half */}
      <motion.div
        id="home"
        className="home-content"
        initial={{ opacity: 0, x: -100 }} // Start from the left
        whileInView={{ opacity: 1, x: 0 }} // Animate to center when in view
        transition={{ duration: 0.5 }}
        viewport={{ once: false }} // Trigger animation each time it enters the viewport
      >
        <h1>
          Hello! I'm <span>Manigandan Nachiappan</span>, a passionate Web Developer.
        </h1>
        <button className="home-button">
          <a href="https://github.com/manigandan-2003" rel="noopener noreferrer">
            Check My Work
          </a>
        </button>
      </motion.div>

      {/* Right Half */}
      <motion.div
        className="image"
        initial={{ opacity: 0, x: 100 }} // Start from the right
        whileInView={{ opacity: 1, x: 0 }} // Animate to center when in view
        transition={{ duration: 0.5 }}
        viewport={{ once: false }} // Trigger animation each time it enters the viewport
      >
        <img src={Me} alt="My Photo" />
      </motion.div>
    </div>
  );
};

export default Home;