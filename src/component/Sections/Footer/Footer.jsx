import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/william-okerio-ongaki-519519166/">
          <FaLinkedin />
        </a>
        <a href="mailto:ongaki.dev@gmail.com">
          <SiMinutemailer />
        </a>
        <a href="https://github.com/Devongaki">
          <FaSquareGithub />
        </a>
      </div>
    </div>
  );
};
