import "./App.css";
import {useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import UxUi from "./components/UxUi";
import Programming from "./components/Programming";
import Arts from "./components/Arts";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import WebHeader from "./components/WebHeader";
import Footer from "./components/Footer";
import ProjectView from "./components/ProjectView";

import ContactBtn from "./components/ContactBtn";
import Contact from "./components/Contact";


function App() {



  return (
    <>




      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/uxui" element={<UxUi />} />
        <Route path="/projectview/:id" element={<ProjectView/>} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <WebHeader />

      <Footer />
    </>
  );
 
}

export default App;