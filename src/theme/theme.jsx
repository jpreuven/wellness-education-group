import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1c5300", // Change the primary color
    },
    secondary: {
      main: "#FFE157", // Change the secondary color
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
