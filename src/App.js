import React from "react";
import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { About } from "./component/Sections/About/About";
import { Projects } from "./component/Sections/Projects/Projects";
import { Home } from "./component/Sections/Home/Home";
import Contact from "./component/Sections/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
