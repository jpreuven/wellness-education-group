import { useState } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { StyledFooterDivider } from "./index.styles";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <StyledFooterDivider />
      <Footer />
    </>
  );
}

export default App;