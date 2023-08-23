import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
  useEffect(() => {
    if (TRACKING_ID !== "") {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/app-ads.txt") {
      window.location.replace("https://cdn.jsdelivr.net/gh/NjbSyd/my-portfolio@master/public/app-ads.txt");
    }
  }, []);

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
  );
}

export default App;
