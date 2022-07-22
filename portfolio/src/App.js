import React, { Suspense } from "react";
import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import WebHeader from "./components/WebHeader";
import ContactBtn from "./components/ContactBtn";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import NotFound from "./components/NotFound";
import UxUi from "./components/UxUi";
// import Home from "./components/Home";
// import Programming from "./components/Programming";
// import Arts from "./components/Arts";
// import AboutMe from "./components/AboutMe";
// import Contact from "./components/Contact";
// import ProjectView from "./components/ProjectView";

// const UxUi = React.lazy(() => import("./components/UxUi"));
const Programming = React.lazy(() => import("./components/Programming"));
const Arts = React.lazy(() => import("./components/Arts"));
const AboutMe = React.lazy(() => import("./components/AboutMe"));
const Home = React.lazy(() => import("./components/Home"));
const ProjectView = React.lazy(() => import("./components/ProjectView"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  return (
    <>

      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/uxui" element={<UxUi />} />
          <Route path="/projectview/:id" element={<ProjectView />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <WebHeader />

      <Footer />
    </>
  );
}

export default App;
