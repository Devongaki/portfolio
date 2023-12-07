import React from "react";
import "./Projects.css";
import { FaGithubSquare } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import GamestudioImg from "../../../assets/images/GamestudioImg.png";
import threadco from "../../../assets/images/threadco.png";
import Rainydaysimg from "../../../assets/images/Rainydays.png";

export const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <div className="project-container">
          <div className="project-items">
            <div className="project-img">
              <img src={GamestudioImg} alt="" />
            </div>
            <div className="project-details">
              <div className="project-title">
                <h1>Gamestudios</h1>
              </div>
              <div className="project-description">
                <p>
                  Welcome to my Gamestudio!
                  <br />
                  <br /> It's a platform where you can easily search for your
                  favorite games, read about their details, and swiftly jump
                  into the gaming action with just a click. <br />
                  <br /> Enjoy the convenience of exploring and playing all in
                  one place!"
                </p>
              </div>
              <div className="project-cta">
                <div className="github-cta">
                  <a href="https://github.com/Devongaki/gamearchieve">
                    <FaGithubSquare />
                    Github
                  </a>
                </div>
                <div className="live-cta">
                  <a href="https://taupe-cannoli-a5e077.netlify.app">
                    <MdLiveTv />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-items">
            <div className="project-img">
              <img src={threadco} alt="" />
            </div>
            <div className="project-details">
              <div className="project-title">
                <h1>Threads&Co</h1>
              </div>
              <div className="project-description">
                <p>
                  Threads&Co is an innovative e-commerce platform that redefines
                  the online shopping experience for fashion enthusiasts.
                </p>
              </div>
              <div className="project-cta">
                <div className="github-cta">
                  <a href="https://github.com/Devongaki/Threadsco">
                    <FaGithubSquare />
                    Github
                  </a>
                </div>
                <div className="live-cta">
                  <a href="https://upbeat-kare-14d099.netlify.app/blog">
                    <MdLiveTv />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-items">
            <div className="project-img">
              <img src={Rainydaysimg} alt="" />
            </div>
            <div className="project-details">
              <div className="project-title">
                <h1>RainyDays</h1>
              </div>
              <div className="project-description">
                <p>
                  Rainydays is an e-commerce platform that offers a diverse
                  range of winter jackets. <br />
                  <br /> The site includes filtering options, user accounts,
                  secure payment processing, and a personalized shopping
                  experience.
                </p>
              </div>
              <div className="project-cta">
                <div className="github-cta">
                  <a href="https://github.com/Devongaki/gamearchieve">
                    <FaGithubSquare />
                    Github
                  </a>
                </div>
                <div className="live-cta">
                  <a href="https://nostalgic-hawking-af93b5.netlify.app/">
                    <MdLiveTv />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="project-items">
            <div className="project-img">
              <img src="" alt="" />
            </div>
            <div className="project-details">
              <div className="project-title">
                <h1>Gamestudios</h1>
              </div>
              <div className="project-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> <br /> Quod voluptate dolores deserunt reiciendis
                  aspernatur temporibus tempora natus enim doloribus mollitia.{" "}
                  <br />
                  <br /> quos eligendi, id alias pariatur similique ex, minima
                  facilis repellat?
                  <br /> quos eligendi, id alias pariatur similique ex, minima
                  facilis repellat?
                </p>
              </div>
              <div className="project-cta">
                <div className="github-cta">
                  <a href="https://github.com/Devongaki/gamearchieve">
                    <FaGithubSquare />
                    Github
                  </a>
                </div>
                <div className="live-cta">
                  <a href="https://taupe-cannoli-a5e077.netlify.app">
                    <MdLiveTv />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-items">
            <div className="project-img">
              <img src="" alt="" />
            </div>
            <div className="project-details">
              <div className="project-title">
                <h1>Gamestudios</h1>
              </div>
              <div className="project-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> <br /> Quod voluptate dolores deserunt reiciendis
                  aspernatur temporibus tempora natus enim doloribus mollitia.{" "}
                  <br />
                  <br /> quos eligendi, id alias pariatur similique ex, minima
                  facilis repellat?
                  <br /> quos eligendi, id alias pariatur similique ex, minima
                  facilis repellat?
                </p>
              </div>
              <div className="project-cta">
                <div className="github-cta">
                  <a href="https://github.com/Devongaki/gamearchieve">
                    <FaGithubSquare />
                    Github
                  </a>
                </div>
                <div className="live-cta">
                  <a href="https://taupe-cannoli-a5e077.netlify.app">
                    <MdLiveTv />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
