import React from "react";
import "./About.css";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaHtml5,
  FaSass,
  FaWordpressSimple,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";


export const About = () => {
  return (
    <div id="about">
      <div className="about-container container">
        <div className="about-me">
          <h2>Your best shines in the face of challenges.</h2>
          <p></p>
          <p>
            Hi 👋 I'm William, a seasoned professional with over two and a half
            years of diverse experience. Beyond my primary role, I am a
            professional dancer, a dedicated fitness influencer, and I find joy
            in the intricate world of coding.
            <br />
            <br />
            visit my{" "}
            <a href="https://www.linkedin.com/in/william-okerio-ongaki-519519166/">
              Linkedin{" "}
            </a>
            for more details
          </p>
        </div>
        <div className="skills-container">
          <div className="about-skills">
            <div className="skills-brands">
              <IoLogoJavascript />
              <p>JavaScript</p>
            </div>
            <div className="skills-brands">
              <FaReact />
              <p>React</p>
            </div>
            <div className="skills-brands">
              <FaNodeJs />
              <p>Node</p>
            </div>
          </div>
          <div className="about-skills">
            <div className="skills-brands">
              <FaWordpressSimple />
              <p>WordPress</p>
            </div>
            <div className="skills-brands">
              <FaHtml5 />
              <p>HTML5</p>
            </div>
            <div className="skills-brands">
              <IoLogoCss3 />
              <p>CSS3</p>
            </div>
          </div>
          <div className="about-skills">
            <div className="skills-brands">
              <SiTypescript />
              <p>Typescript</p>
            </div>
            <div className="skills-brands">
              <BsBootstrapFill />
              <p>Bootstrap</p>
            </div>
            <div className="skills-brands">
              <FaSass />
              <p>Sass</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
