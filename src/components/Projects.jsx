import React from "react";
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
            "A machine learning model that predicts the outcome of IPL matches using data analysis and classification techniques.",
        link: "https://github.com/manigandan-2003/IPL-Prediction-2022",
        image: ipl,
    },
    {
        title: "Virtual Bike Showroom",
        description:
            "A web application built with the MERN stack that allows users to explore various bikes and their specifications in a virtual showroom.",
        link: "https://github.com/manigandan-2003/Riders-Paradise",
        image: riders,
    },
    {
        title: "NavX - Online Transportation Software",
        description:
            "A platform that offers smart ride-sharing options with a focus on efficiency, cost-effectiveness, and passenger safety.",
        link: "https://github.com/manigandan-2003/NavX",
        image: navx,
    },
    {
        title: "Smart Helmet for Underground Miners",
        description:
            "An IoT-based smart helmet designed to monitor underground miners' safety using various sensors and alert systems.",
        link: "https://github.com/your-username/smart-helmet",
        image: smarthelmet,
    },
    {
        title: "Disaster Escalation Framework",
        description:
            "A framework built to quickly respond and escalate actions during disaster situations, focusing on rapid information sharing and action tracking.",
        link: "https://github.com/manigandan-2003/ECS-App",
        image: disaster
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <a href={project.link}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                        </a>
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
