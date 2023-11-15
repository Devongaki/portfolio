import React, { useState } from "react";
import "./Navbar.css";
import LogoImg from "../../assets/images/w-logo-33581.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiArrowDownTray } from "react-icons/hi2";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu();
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <a
            href="/"
            className="navbar-logo"
            onClick={() => scrollToSection("home")}
          >
            <img src={LogoImg} alt="William Logo image" />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="/#home"
                className="nav-links"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
              <a
                href="/#projects"
                className="nav-links"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
              <a
                href="/#about"
                className="nav-links"
                onClick={() => scrollToSection("about")}
              >
                About
              </a>
            </li>
          </ul>
          <div className="resume-btn">
            <a href="../../assets/Resume.pdf" download="William_Resume.pdf">
              <button>
                <HiArrowDownTray />
                Resume
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
