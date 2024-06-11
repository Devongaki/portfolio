import React from "react";
import "./Projects.css";
import { FaGithubSquare } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import GamestudioImg from "../../../assets/images/GamestudioImg.png";
import nexcent from "../../../assets/images/nexcent.png";
import Rainydaysimg from "../../../assets/images/Rainydays.png";

const projectsData = [
  {
    title: "Gamestudios",
    description: `Welcome to my Gamestudio! It's a platform where you can easily search for your favorite games, read about their details, and swiftly jump into the gaming action with just a click. Enjoy the convenience of exploring and playing all in one place!`,
    github: "https://github.com/Devongaki/gamearchieve",
    liveDemo: "https://gamearchive-ongaki.netlify.app/",
    img: GamestudioImg,
  },
  {
    title: "Nexcent",
    description: `To improve my skills in web design, I created a landing page using the following technologies: React, HTML, and CSS. This project helped me practice and enhance my abilities in modern web development and design.`,
    github: "https://github.com/Devongaki/nexcent",
    liveDemo: "https://nexcentongaki.netlify.app",
    img: nexcent,
  },
  {
    title: "RainyDays",
    description: `Rainydays is an e-commerce platform that offers a diverse range of winter jackets. The site includes filtering options, user accounts, secure payment processing, and a personalized shopping experience.`,
    github: "https://github.com/Devongaki/gamearchieve",
    liveDemo: "https://nostalgic-hawking-af93b5.netlify.app/",
    img: Rainydaysimg,
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <div className="container">
        {projectsData.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-details">
              <h1 className="project-title">{project.title}</h1>
              <p className="project-description">{project.description}</p>
              <div className="project-cta">
                <a
                  href={project.github}
                  className="github-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare /> Github
                </a>
                <a
                  href={project.liveDemo}
                  className="live-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdLiveTv /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
