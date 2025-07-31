import React from "react";
import { useState } from "react";
import images from "../component/images.avif";
import images2 from "../component/images2.avif";
import images3 from "../component/images3.avif";
import weather from "../component/weather.avif";
import Profile from "../component/profile.jpg";
import Patient from "../component/Patient.avif";
import guess from "../component/guess.avif";
import snake from "../component/snake.avif";
import piano from "../component/piano.avif";
import calculator from "../component/calculator.avif";
import scrapbook from "../component/scrapbook.avif";

const Project = () => {
  const [ishover, setishover] = useState(false);
  const [ishover2, setishover2] = useState(false);
  const [ishover3, setishover3] = useState(false);
  const [ishover4, setishover4] = useState(false);
  const [ishover5, setishover5] = useState(false);
  const [ishover6, setishover6] = useState(false);
  const [ishover7, setishover7] = useState(false);
  const [ishover8, setishover8] = useState(false);
  const [ishover9, setishover9] = useState(false);
  const [ishover10, setishover10] = useState(false);
  const [ishover11, setishover11] = useState(false);
  return (
    <div className="project">
      <div className="container">
        <div className="project">
          <h1
            className="underline"
            style={{ color: "white", paddingLeft: "20px" }}
          >
            My <span style={{ color: "#fb0c87" }}>Projects</span>
          </h1>
          <p style={{ color: "white", paddingLeft: "20px" }}>
            Some Of My Latest Projects :
          </p>
        </div>
        <div className="project-grid">
          <div className="list">
            <div
              className="ho"
              onMouseEnter={() => setishover8(true)}
              onMouseLeave={() => setishover8(false)}
            >
              {ishover8 && (
                <p>
                  <span
                    style={{
                      fontWeight: "50px",
                      fontSize: "25px",
                      color: "#fb0c87",
                    }}
                  >
                    MedCare
                  </span>
                  <br />
                  MedCare, your trusted partner in healthcare. At MedCare, we
                  are dedicated to providing exceptional medical services with a
                  focus on compassionate care and patient convenience.
                </p>
              )}
              <img src={Patient} alt="To do list" className="todo" />
              {ishover8 && (
                <a href="http://medcare-nine-alpha.vercel.app" className="read">
                  Demo
                </a>
              )}{" "}
              {ishover8 && (
                <a
                  href="https://github.com/ShrivastavaAstha/Hospital-Management-System"
                  className="read"
                >
                  Code
                </a>
              )}
            </div>

            <div
              className="ho"
              onMouseEnter={() => setishover2(true)}
              onMouseLeave={() => setishover2(false)}
            >
              {ishover2 && (
                <p>
                  <span
                    style={{
                      fontWeight: "50px",
                      fontSize: "25px",
                      color: "#fb0c87",
                    }}
                  >
                    CINOVA
                  </span>
                  <br /> A perfect movie app to search and store details of your
                  favourite movies. Having login/signup JWT authorization.
                </p>
              )}
              <img src={images2} alt="Movie App" className="todo" />
              {ishover2 && (
                <a href="https://cinova-u7zp.onrender.com" className="read">
                  Demo
                </a>
              )}{" "}
              {ishover2 && (
                <a
                  href="https://github.com/ShrivastavaAstha/CINOVABACKEND"
                  className="read"
                >
                  Code
                </a>
              )}
            </div>
            <div
              className="ho"
              onMouseEnter={() => setishover(true)}
              onMouseLeave={() => setishover(false)}
            >
              {ishover && (
                <p>
                  <span
                    style={{
                      fontWeight: "50px",
                      fontSize: "25px",
                      color: "#fb0c87",
                    }}
                  >
                    Task Manager
                  </span>
                  <br /> Boost your productivity with TaskMaster! Organize your
                  to-dos, set deadlines, and track progress with ease.Achieve
                  your goals efficiently and effortlessly.
                </p>
              )}
              <img src={images} alt="To do list" className="todo" />
              {ishover && (
                <a href="https://taskmanager2.onrender.com" className="read">
                  Demo
                </a>
              )}{" "}
              {ishover && (
                <a
                  href="https://github.com/ShrivastavaAstha/Task-Management/tree/master"
                  className="read"
                >
                  Code
                </a>
              )}
            </div>

            <div
              className="ho"
              onMouseEnter={() => setishover3(true)}
              onMouseLeave={() => setishover3(false)}
            >
              {ishover3 && (
                <p>
                  <span
                    style={{
                      fontWeight: "50px",
                      fontSize: "25px",
                      color: "#fb0c87",
                    }}
                  >
                    Patient-info Manager
                  </span>
                  <br /> A perfect app to manage the details of patient.
                </p>
              )}
              <img src={images3} alt="Patient info" className="todo" />
              {ishover3 && (
                <a
                  href="https://shrivastavaastha.github.io/Patient-Info/"
                  className="read"
                >
                  Demo
                </a>
              )}{" "}
              {ishover3 && (
                <a
                  href="https://github.com/ShrivastavaAstha/Patient-Info/tree/master"
                  className="read"
                >
                  Code
                </a>
              )}
            </div>

            <div
              className="ho"
              onMouseEnter={() => setishover11(true)}
              onMouseLeave={() => setishover11(false)}
            >
              {ishover11 && (
                <p>
                  <span
                    style={{
                      fontWeight: "50px",
                      fontSize: "25px",
                      color: "#fb0c87",
                    }}
                  >
                    ScrapBook
                  </span>
                  <br />
                  Capture and cherish your memories with ScrapBook! This
                  intuitive app lets you create beautiful digital scrapbooks
                  with ease. Add photos, texts, and decorative elements to
                  personalize your pages.
                </p>
              )}
              <img src={scrapbook} alt="Piano" className="todo" />
              {ishover11 && (
                <a
                  href="https://shrivastavaastha.github.io/ScrapBook/"
                  className="read"
                >
                  Demo
                </a>
              )}{" "}
              {ishover11 && (
                <a
                  href="https://github.com/ShrivastavaAstha/ScrapBook"
                  className="read"
                >
                  Code
                </a>
              )}
            </div>
            <div
              className="ho"
              onMouseEnter={() => setishover7(true)}
              onMouseLeave={() => setishover7(false)}
            >
              {ishover7 && (
                <p>
                  <span
                    style={{
                      fontWeight: "50px",
                      fontSize: "25px",
                      color: "#fb0c87",
                    }}
                  >
                    Weather App
                  </span>
                  <br />
                  Your reliable source for real-time weather updates and
                  detailed forecasts. Stay ahead of the weather with this
                  WeatherApp!
                </p>
              )}
              <img
                src={weather}
                alt="Weather App"
                className="todo"
                style={{ height: "20%" }}
              />
              {ishover7 && (
                <a
                  href="https://shrivastavaastha.github.io/WeatherApp/"
                  className="read"
                >
                  Demo
                </a>
              )}{" "}
              {ishover7 && (
                <a
                  href="https://github.com/ShrivastavaAstha/WeatherApp/tree/master"
                  className="read"
                >
                  Code
                </a>
              )}
            </div>
            <div
              className="ho"
              onMouseEnter={() => setishover4(true)}
              onMouseLeave={() => setishover4(false)}
            >
              {ishover4 && (
                <p>
                  <span
                    style={{
                      fontWeight: "50px",
                      fontSize: "25px",
                      color: "#fb0c87",
                    }}
                  >
                    Guessing Game
                  </span>
                  <br /> A gamming app to guess random numbers between 1-100
                  within a limited number of attempts.
                </p>
              )}
              <img
                src={guess}
                alt="Guess the number"
                className="todo"
                style={{ height: "20%" }}
              />
              {ishover4 && (
                <a
                  href="https://shrivastavaastha.github.io/JS-Guessing-Game/"
                  className="read"
                >
                  Demo
                </a>
              )}{" "}
              {ishover4 && (
                <a
                  href="https://github.com/ShrivastavaAstha/JS-Guessing-Game"
                  className="read"
                >
                  Code
                </a>
              )}
            </div>
            <div
              className="ho"
              onMouseEnter={() => setishover5(true)}
              onMouseLeave={() => setishover5(false)}
            >
              {ishover5 && (
                <p>
                  <span
                    style={{
                      fontWeight: "50px",
                      fontSize: "25px",
                      color: "#fb0c87",
                    }}
                  >
                    Snake Game
                  </span>
                  <br /> Relive the nostalgia with Classic Snake! Guide your
                  snake to eat food and grow longer without crashing into the
                  walls or yourself.
                </p>
              )}
              <img src={snake} alt="Snake Game" className="todo" />
              {ishover5 && (
                <a
                  href="https://shrivastavaastha.github.io/Js-Snake-Game/"
                  className="read"
                >
                  Demo
                </a>
              )}{" "}
              {ishover5 && (
                <a
                  href="https://github.com/ShrivastavaAstha/Js-Snake-Game"
                  className="read"
                >
                  Code
                </a>
              )}
            </div>
            <div
              className="ho"
              onMouseEnter={() => setishover6(true)}
              onMouseLeave={() => setishover6(false)}
            >
              {ishover6 && (
                <p>
                  <span
                    style={{
                      fontWeight: "50px",
                      fontSize: "25px",
                      color: "#fb0c87",
                    }}
                  >
                    Piano
                  </span>
                  <br />
                  Unleash your musical talent with Playable Piano ! Whether
                  you're a beginner or an experienced pianist, Playable Piano
                  offers a realistic and interactive piano experience.
                </p>
              )}
              <img src={piano} alt="Piano" className="todo" />
              {ishover6 && (
                <a
                  href="https://shrivastavaastha.github.io/JS-Piano/"
                  className="read"
                >
                  Demo
                </a>
              )}{" "}
              {ishover6 && (
                <a
                  href="https://github.com/ShrivastavaAstha/JS-Piano"
                  className="read"
                >
                  Code
                </a>
              )}
            </div>

            <div
              className="ho"
              onMouseEnter={() => setishover9(true)}
              onMouseLeave={() => setishover9(false)}
            >
              {ishover9 && (
                <p>
                  <span
                    style={{
                      fontWeight: "50px",
                      fontSize: "25px",
                      color: "#fb0c87",
                    }}
                  >
                    GitHub Profile App
                  </span>
                  <br />
                  Instantly access and showcase any GitHub user's profile with
                  GitHub Profile Fetcher! Simply enter a username to fetch and
                  display comprehensive details, including repositories,
                  contributions, and activity.
                </p>
              )}
              <img src={Profile} alt="Piano" className="todo" />
              {ishover9 && (
                <a
                  href="https://shrivastavaastha.github.io/JS-GitHub-Profile-App/ "
                  className="read"
                >
                  Demo
                </a>
              )}{" "}
              {ishover9 && (
                <a
                  href="https://github.com/ShrivastavaAstha/JS-GitHub-Profile-App"
                  className="read"
                >
                  Code
                </a>
              )}
            </div>

            <div
              className="ho"
              onMouseEnter={() => setishover10(true)}
              onMouseLeave={() => setishover10(false)}
            >
              {ishover10 && (
                <p>
                  <span
                    style={{
                      fontWeight: "50px",
                      fontSize: "25px",
                      color: "#fb0c87",
                    }}
                  >
                    Student Grade Calcy
                  </span>
                  <br />
                  Simplify your calculations with Student Grade Calcy! This
                  versatile calculator app handles everything from basic
                  arithmetic to advanced .
                </p>
              )}
              <img src={calculator} alt="Piano" className="todo" />
              {ishover10 && (
                <a
                  href="https://shrivastavaastha.github.io/JS-Calculator/"
                  className="read"
                >
                  Demo
                </a>
              )}{" "}
              {ishover10 && (
                <a
                  href="https://github.com/ShrivastavaAstha/JS-Calculator"
                  className="read"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
