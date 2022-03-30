import "./App.css";
import React, { useState } from "react";
import HomePage from "./components/HomePage/home-page.component";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import HamburguerMenu from "./images/hamburguer-menu-icon.svg";
import UploadPicture from "./components/UploadPicture/drop-zone.component";
import Result from "./components/Result/result.component";
import Camera from "./components/Camera/camera.component";
import TypeEquation from "./components/TypeEquation/type.component";
import Cards from "./components/Cards/cards.component";
import CloseIcon from "./images/close-x.svg";
import PictureTaken from "./components/Camera/PictureTaken/picture_taken.component";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [capturedImg, setCapturedImg] = useState(null);

  const handleClickSidebar = e => {
    e.preventDefault();
    setSidebar(!sidebar);
  }
  
  return (
    <div className="App">
      <Router>
        <div className="center-main-box">
          <header className="header-main-box">
            <img
              id="hamburguer-menu-icon"
              alt="menu icon"
              src={HamburguerMenu}
              onClick={handleClickSidebar}
            />
            <div
              className={sidebar ? "sidebar-filler active" : "sidebar-filler"}
            ></div>
            <nav className={sidebar ? "side-menu active" : "side-menu"}>
              <span
                className="close-icon sidebar-icon"
                onClick={handleClickSidebar}
              ></span>

              <ul className="sidebar-container" onClick={handleClickSidebar}>
                <Link to="/">Home</Link>
                <Link to="/upload">Upload a Picture</Link>
                <Link to="/camera">Take a Picture</Link>
                <Link to="/type">Type an Equation</Link>
              </ul>
            </nav>
          </header>
          <main className="main-box-container">
            <Routes>
              <Route exact path="/" element={<Cards />} />
              <Route path="/upload" element={<UploadPicture />} />
              <Route path="/result" element={<Result />} />
              <Route path="/camera" element={<Camera setCapturedImg={setCapturedImg}/>} />
              <Route path="/type" element={<TypeEquation />} />
              <Route path="/picture-taken" element={<PictureTaken capturedImg={capturedImg}/>}/>
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
