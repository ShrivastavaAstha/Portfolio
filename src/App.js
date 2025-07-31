import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contacts from "./component/Contacts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="About" element={<About />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contacts" element={<Contacts />} />
      </Routes>
      {/* <Navbar />  */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
};
export default App;
