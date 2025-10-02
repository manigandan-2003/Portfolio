import React from "react";
import { motion } from "framer-motion";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <motion.div
      id="experience"
      className="experience-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="experience-title">My Experience</h1>
      <div className="experience-list">
        <motion.div
          className="experience-card"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h2 className="experience-role">Junior Software Engineer (Part-time)</h2>
          <p className="experience-period">April 2025 - September 2025</p>
          <h3 className="experience-company">SigaInfotech</h3>
          <div className="experience-details">
            <ul>
              <li>
               <strong>Carerez - Old-Age Home Management Software: </strong> 
                Contributed to both frontend and backend development. Created 
                REST APIs and database entities (models/tables) using 
                Sequelize and TypeScript. Built UI components with JavaScript 
                and performed software testing to identify and resolve bugs.
              </li>
              <li>
                <strong>Carerez Super Admin Portal: </strong> 
                Developed UI components and integrated APIs to manage multiple 
                tenants efficiently.
              </li>
              <li>
                <strong>EasyDine - Restaurant Management Software: </strong> 
                Worked on the Zynk admin portal, focusing on developing UI 
                components and integrating APIs to enhance functionality.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;