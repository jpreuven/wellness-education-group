import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#195140", // Change the primary color
      tan: "#ffe8bd", // Change the secondary color
    },
    secondary: {
      main: "#0c5733", // Change the secondary color
      tan: "#fcedd0", // Change the secondary color
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
  // Additional theme configuration options can be added here
});

export default theme;
