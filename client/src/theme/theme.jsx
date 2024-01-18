import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#195140", // Change the primary color
      tan: "#ffe8bd", // Change the secondary color
      // main: "#ffe8bd", // Change the primary color
      // tan: "#195140", // Change the secondary color
    },
    secondary: {
      main: "#0c5733", // Change the secondary color
      tan: "#fcedd0", // Change the secondary color
      // main: "#fcedd0", // Change the secondary color
      // tan: "#0c5733", // Change the secondary color
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1200,
      // You can add more breakpoints if you need
    },
  },
  typography: {
    fontFamily: "Lora, serif",
    fontSize: 16,
    h1: {
      fontSize: "32px",
      fontWeight: "550",
    },
    // Customize other variants as needed
  },
  // Additional theme configuration options can be added here
});

export default theme;
