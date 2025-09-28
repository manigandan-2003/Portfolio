import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";
import ipl from "../assets/ipl.jpg";
import riders from "../assets/riders.png";
import navx from "../assets/navx.png";
import smarthelmet from "../assets/smarthelmet.jpg";
import disaster from "../assets/disaster.png";

const projects = [
  {
    title: "IPL Match Win Prediction",
    description:
      "Created a machine learning model to predict the outcome of IPL matches using a dataset spanning from 2008 to 2022, achieving an accuracy rate of 95% by using Random Forest algorithm. Utilized NumPy and Pandas for data preprocessing and Scikit-learn for model training.",
    link: "https://github.com/manigandan-2003/IPL-Prediction-2022",
    image: ipl,
  },
  {
    title: "NavX - Online Transportation Software (Group Project)",
    description:
      "NavX is an online transportation software specializing in carpooling, designed to revolutionize inter-city travel. Built using the MERN stack, it offers a cost-effective, efficient, and secure ride-sharing platform. The project integrates cutting-edge monitoring and alert systems to ensure passenger safety.",
    link: "https://github.com/manigandan-2003/NavX",
    image: navx,
  },
  {
    title: "Virtual Bike Showroom (Group Project)",
    description:
      "A web application built with the MERN stack that allows users to explore various bikes and their specifications in a virtual showroom.",
    link: "https://github.com/manigandan-2003/Riders-Paradise",
    image: riders,
  },
  {
    title: "Disaster Escalation Framework (Group Project)",
    description:
      "A framework built to quickly respond and escalate actions during disaster situations, focusing on rapid information sharing and action tracking.",
    link: "https://github.com/manigandan-2003/ECS-App",
    image: disaster,
  },
  {
    title: "Smart Helmet for Underground Miners (Group Project)",
    description:
      "Developed a smart helmet solution for enhancing safety in mining operations and used 2 Arduino UNO boards for sensor integration and it is just a prototype. Implemented sensors to detect poisonous gases, measure temperature and humidity, and monitor pressure changes.",
    image: smarthelmet,
  }
];

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </a>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;