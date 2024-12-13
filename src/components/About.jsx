import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        Hi there! I'm <strong>Manigandan Nachiappan</strong>, an aspiring Full Stack Web Developer with a specialization in Artificial Intelligence and Machine Learning. I am currently pursuing a B.Tech in Computer Science Engineering at <strong>Vellore Institute of Technology, Amaravati</strong>.
      </p>
      <p className="about-goal">
        My journey revolves around leveraging modern technologies to build intuitive, scalable, and robust applications that solve real-world problems. With a solid foundation in programming, machine learning, and web development, I aim to contribute to impactful projects and continually grow as a developer.
      </p>

      <h2 className="tech-stack-title">Tech Stack</h2>
      <div className="tech-stack">
        <h3>Languages:</h3>
        <p>Java, Python, JavaScript, HTML5, CSS3</p>
        <h3>Frameworks & Libraries:</h3>
        <p>React, Redux, TailwindCSS, Node.js, Express.js, JWT, NumPy, Pandas, Matplotlib, Scikit-learn</p>
        <h3>Databases:</h3>
        <p>MySQL, MongoDB</p>
        <h3>Tools & Platforms:</h3>
        <p>Git, GitHub, Postman, Canva, Figma</p>
      </div>

      <h2 className="education-title">Education</h2>
      <div className="education">
        <p><strong>B.Tech in Computer Science Engineering</strong></p>
        <p>Specialization: Artificial Intelligence and Machine Learning</p>
        <p><strong>Vellore Institute of Technology (VIT), Amaravati</strong></p>
        <p>Current CGPA: 8.21</p>
      </div>

      <h2 className="languages-title">Languages Known</h2>
      <p>English, Tamil</p>
    </div>
  );
};

export default About;