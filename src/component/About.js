import React from "react";
import pic from "../component/pic.jpg";

const About = () => {
  return (
    <div>
      <div className="about">
        <p>
          <span className="underline">
            About <span style={{ color: "#fb0c87" }}>Me</span>
          </span>
        </p>
      </div>
      <div className="about-contain">
        <p className="about-contain-item1">
          <img src={pic} alt="HTML icon" className="pic" />
          <br />
          <b>
            {" "}
            Hi, I'm a B.tech Final year student . Please take a look around.
          </b>
        </p>
        <p className="about-contain-item2">
          "Hello! I'm a passionate final year B.Tech student of Electronics and
          Communication Engineering with a strong inclination towards Full Stack
          development. I've gained a solid foundation in Full Stack development
          technologies particularly using MERN Stack. I believe in the power of
          innovation and am constantly exploring new avenues to enhance my
          skills. With a keen eye for design and a knack for problem-solving, I
          thrive on turning ideas into interactive and user-friendly websites.
          I'm excited about the oppportunity to contribute my expertise as an
          intern and collaborate with teams to create impactful online
          solutions. Feel free to explore my portfolio to get a glimpse of my
          projects and the passion that drives me. Let's connect and explore how
          I can bring value to your team!"
        </p>
      </div>
    </div>
  );
};
export default About;
