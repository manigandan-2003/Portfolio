import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* About Me Section */}
      <motion.div
      id="about"
        className="about-me-container"
        initial={{ opacity: 0, x: -100 }} // Slide from the left
        whileInView={{ opacity: 1, x: 0 }} // Animate to center when in view
        transition={{ duration: 0.5 }}
        viewport={{ once: false }} // Animation triggers each time the section comes into view
      >
        <h1 className="about-title">About Me</h1>
        <div className="about-content">
          <p className="about-intro">
          Hi there! I'm <strong>Manigandan Nachiappan</strong>, an aspiring Full
          Stack Web Developer with a specialization in Artificial Intelligence and
          Machine Learning. I am currently pursuing a B.Tech in Computer Science
          Engineering at{" "}
          <strong>Vellore Institute of Technology, Amaravati</strong>.
          My journey revolves around leveraging modern technologies to build
          intuitive, scalable, and robust applications that solve real-world
          problems. With a solid foundation in programming,
          web development and basic knowledge in machine learning, I aim to contribute to impactful projects and
          continually grow as a developer.
        </p>
        </div>
      </motion.div>

      {/* Tech Stack and Education Section */}
      <motion.div
        className="tech-education-container"
        initial={{ opacity: 0, x: 100 }} // Slide from the right
        whileInView={{ opacity: 1, x: 0 }} // Animate to center when in view
        transition={{ duration: 0.5 }}
        viewport={{ once: false }} // Animation triggers each time the section comes into view
      >
        <div className="tech-stack">
          <h3>Languages:</h3>
          <p>Java, Python, JavaScript, TypeScript, HTML, CSS</p>
          <h3>Frameworks & Libraries:</h3>
          <p>
            React, Redux, TailwindCSS, Node.js, Express.js, JWT
          </p>
          <h3>Databases:</h3>
          <p>MySQL, MongoDB, Postgres</p>
          <h3>Tools & Platforms:</h3>
          <p>Git, GitHub, Postman, Canva, Figma</p>
        </div>

        <div className="education">
          <h3>Education:</h3>
          <p>
            <strong>B.Tech in Computer Science Engineering</strong>
          </p>
          <p>
            Specialization: Artificial Intelligence and Machine Learning
          </p>
          <p>
            <strong>Vellore Institute of Technology (VIT), Amaravati</strong>
          </p>
          <p>Current CGPA: 8.43</p>
          <h2 className="languages-title">Languages Known</h2>
          <p>English, Tamil</p>
        </div>
      </motion.div>

      {/* Resume and LinkedIn Button Section */}
      <motion.div
        className="about-resume-button"
        initial={{ opacity: 0, y: 50 }} // Slide up from below
        whileInView={{ opacity: 1, y: 0 }} // Animate to original position when in view
        transition={{ duration: 0.5 }}
        viewport={{ once: false }} // Animation triggers each time the section comes into view
      >
        <button className="about-button">
          <a href="https://linkedin.com/in/manigandan-n" rel="LinkedIn">
            LinkedIn
          </a>
        </button>
        <button className="resume-button">
          <a
            href="https://drive.google.com/file/d/1aDSorIo_G16JYStexkh2dxaJMEt4pXT1/view?usp=sharing"
            rel="Resume"
          >
            Resume
          </a>
        </button>
      </motion.div>
    </div>
  );
};

export default About;