import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
