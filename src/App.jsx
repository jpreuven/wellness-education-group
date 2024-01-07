import { useState } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
