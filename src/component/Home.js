import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import Resume from "../assets/Astha_Resume.pdf";
import "./navbar.css";
import pic from "../component/pic.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleClick = () => setIsNavOpen(!isNavOpen);

  const [showResume, setShowResume] = useState(false);
  const toggleResume = () => {
    setShowResume(!showResume);
  };
  return (
    <div>
      <nav className="navbar">
        <div
          style={{
            textShadow: "1.5px 1.5px #fb0c87",
            fontFamily: "sans-serif",
            fontSize: "30px",
            fontWeight: "50px",
            color: "#fb0c87",
            fontStyle: "italic",
            position: "fixed",
          }}
          className="portfolio"
        >
          Portfolio
        </div>
        <div className="nav-container">
          <MenuIcon className="navbar-toggler" onClick={toggleNav} />
          <ul className={`navbar-menu ${isNavOpen ? "open" : ""}`}>
            <li className="nav-item">
              <Link onclick={handleClick} to="Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link onclick={handleClick} to="About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link onclick={handleClick} to="Skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link onclick={handleClick} to="Projects">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link onclick={handleClick} to="Contacts">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="items">
        <ul>
          <li className="animate" style={{ backgroundColor: "blue" }}>
            <a href="https://www.linkedin.com/in/astha-srivastava-61b27a257">
              <span className="text" style={{ backgroundColor: "blue" }}>
                Linkedin{" "}
              </span>
              <LinkedInIcon />
            </a>
          </li>
          <br />
          <li className="animate" style={{ backgroundColor: "#333333" }}>
            <a href="https://github.com/ShrivastavaAstha">
              <span className="text" style={{ backgroundColor: "#333333" }}>
                GitHub{" "}
              </span>
              <GitHubIcon />
            </a>
          </li>
          <br />
          <li className="animate" style={{ backgroundColor: "#6fc2b0" }}>
            <a href={Resume} target="_blank" rel="noopener">
              <span className="text" style={{ backgroundColor: "#6fc2b0" }}>
                Resume{" "}
              </span>
              <PersonIcon onClick={toggleResume} />
            </a>
            {showResume && <iframe src={"#"} width="100%" height="500px" />}
          </li>
        </ul>
      </div>
      <br />
      <br />
      <div style={{ paddingLeft: "80px" }}>
        <p style={{ color: "#fb0c87" }} className="homep">
          Hi, my name is
        </p>
        <h1 style={{ color: "#ccd6f6", fontStyle: "Italic" }}>Astha</h1>
        <h2 style={{ color: "#8892b0" }} className="homeh2">
          I'm a Full Stack Developer.
        </h2>
        <p
          style={{ color: "#8892b0", marginBottom: "180px" }}
          className="homep2"
        >
          {" "}
          Passionate full-stack developer with a flair for crafting user-centric
          experiences. Constantly evolving and eager to innovate.
        </p>
        {/* <div className="rotatin-container">
          <div className="rotating-item">
            <img src={pic} alt="image" className="rotating-img" />
          </div>
        </div> */}
        <br />
        <br />
      </div>
    </div>
  );
};
export default Home;
