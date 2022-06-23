import "./App.css";

import HeaderHome from "./components/HeaderHome";


import {  Routes, Route } from "react-router-dom";
import UxUi from "./components/UxUi";
import Programming from "./components/Programming";
import Arts from "./components/Arts";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
function App() {
  return (
    <>
  
        <Routes>
        <Route path="/"  exact element={<Home/>} />    
          {/* <Route path="/uxui" element={<UxUi />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/about" element={<AboutMe />} /> */}
        </Routes>

        
     
 
    </>
  );
}

export default App;
