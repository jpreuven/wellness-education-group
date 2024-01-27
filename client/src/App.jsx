import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Location from "./Pages/Location/Location";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
