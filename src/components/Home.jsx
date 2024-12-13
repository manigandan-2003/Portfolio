import React from "react";
import Me from "../assets/Me.jpg";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>
                    Hello! I'm <span>Manigandan Nachiappan</span>, a passionate
                    Web Developer.
                </h1>
                <button className="home-button">
                    <a
                        href="https://github.com/manigandan-2003"
                        rel="Github"
                    >
                        Check My Work
                    </a>
                </button>
            </div>
            <div className="image">
                <img src={Me} alt="My Photo" />
            </div>
        </div>
    );
};

export default Home;
