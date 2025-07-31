import React from "react";
import "./proffesional.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bs from "../assets/bs.jpg";
import github from "../assets/github.png";
import git from "../assets/git.png";
import js from "../assets/js.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import expressjs from "../assets/expressjs.png";
import react from "../assets/react.png";
import cpp from "../assets/c++.png";
import tailwindcss from "../assets/Tailwind CSS.png";
import postman from "../assets/postman.png";
import figma from "../assets/figma.png";
import mysql from "../assets/mysql.png";
import canva from "../assets/canva.png";
const Skills = () => {
  const circlesData = [
    { name: "Problem Solving", percentage: 90 },
    { name: "Communication", percentage: 95 },
    { name: "Time Management", percentage: 90 },
  ];
  const circlesDatas = [
    { name: "Team Work", percentage: 80 },
    // { name: "Leadership", percentage: 80 },
    { name: "Creativity", percentage: 95 },
    { name: "Writing", percentage: 90 },
  ];
  return (
    <>
      <div className="skill">
        <h1 className="underline">
          My <span style={{ color: "#fb0c87" }}>Skills</span>
        </h1>
        <p>These are my skills : </p>
        <h2 className="subskills">Technical Skills</h2>
      </div>
      <div>
        <div className="img-grid">
          <img src={html} alt="HTML icon" />
          <img src={css} alt="CSS icon" />
          <img src={js} alt="JS icon" />
          <img src={tailwindcss} alt="tailwindcss" />
          {/* <img src={bs} alt="BootStrap icon" /> */}
          <img src={react} alt="REACT icon" />
          <img src="https://redux.js.org/img/redux.svg" alt="Redux icon" />
          <img src={expressjs} alt="Express JS icon" />
          <img src={node} alt="NODEJS icon" />
          <img src="https://socket.io/images/logo.svg" alt="Socket icon" />
          <img src={mongo} alt="MONGODB icon" />
          <img src={postman} alt="Postman icon" />
          <img src={github} alt="GitHub icon" />
          <img src={git} alt="Git icon" />
          <img src={mysql} alt="MySQL icon" />
          <img src={cpp} alt="C++ icon" />
        </div>
      </div>

      <br />
      <br />
      <h2 className="subskills">Professional Skills</h2>
      <div className="circle-container">
        {circlesData.map((circle, index) => {
          return (
            <div className="circle" key={index}>
              <svg width="100" height="100">
                <defs>
                  <linearGradient
                    id={`gradient-${index}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset={`${circle.percentage}%`}
                      stopColor="#fb0c87"
                    />
                    <stop offset={`${circle.percentage}%`} stopColor="white" />
                  </linearGradient>
                </defs>

                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#fb0c87"
                  strokeWidth="8"
                  fill="none"
                  style={{
                    stroke: `url(#gradient-${index})`,
                    padding: "20px",
                    margin: "20px",
                  }}
                />
              </svg>
              <div className="percentage">{circle.percentage}%</div>
              <div className="name">{circle.name}</div>
              <div></div>
            </div>
          );
        })}
      </div>
      <div className="circle-container">
        {circlesDatas.map((circle, index) => {
          return (
            <div className="circle" key={index}>
              <svg width="100" height="100">
                <defs>
                  <linearGradient
                    id={`gradient-${index}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset={`${circle.percentage}%`}
                      stopColor="#fb0c87"
                    />
                    <stop offset={`${circle.percentage}%`} stopColor="white" />
                  </linearGradient>
                </defs>

                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#fb0c87"
                  strokeWidth="8"
                  fill="none"
                  style={{
                    stroke: `url(#gradient-${index})`,
                    padding: "20px",
                    margin: "20px",
                  }}
                />
              </svg>
              <div className="percentage">{circle.percentage}%</div>
              <div className="name">{circle.name}</div>
              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Skills;
