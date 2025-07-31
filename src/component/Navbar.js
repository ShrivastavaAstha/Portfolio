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

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

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
        >
          Portfolio
        </div>
        <div className="nav-container">
          <MenuIcon className="navbar-toggler" onClick={toggleNav} />
          <ul className={`navbar-menu ${isNavOpen ? "open" : ""}`}>
            <li className="nav-item">
              <Link to="Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="About">About</Link>
            </li>
            <li className="nav-item">
              <Link to="Skills">Skills</Link>
            </li>

            <li className="nav-item">
              <Link to="Contacts">Contact</Link>
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
            <a href="/">
              <span className="text" style={{ backgroundColor: "#6fc2b0" }}>
                {" "}
                Email{" "}
              </span>
              <MailOutlineIcon />
            </a>
          </li>
          <br />
          <li className="animate" style={{ backgroundColor: "#565f69" }}>
            <a href={Resume}>
              <span className="text" style={{ backgroundColor: "#565f69" }}>
                Resume{" "}
              </span>
              <PersonIcon onClick={toggleResume} />
            </a>
            {showResume && <iframe src={Resume} width="100%" height="500px" />}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
