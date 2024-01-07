import { useState } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
