import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
// import ThemeProvider from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);
