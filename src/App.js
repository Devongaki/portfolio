import React from "react";
import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { About } from "./component/Sections/About/About";
import { Projects } from "./component/Sections/Projects/Projects";
import { Home } from "./component/Sections/Home/Home";
import { Footer } from "./component/Sections/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
