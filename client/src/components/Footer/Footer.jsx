import { Copyright } from "@mui/icons-material";
import { Grid, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import theme from "../../theme/theme";

export default function Footer() {
  return (
    // <Box
    //   component="footer"
    //   sx={{
    //     py: 3,
    //     px: 2,
    //     mt: "auto",
    //     backgroundColor: (theme) =>
    //       theme.palette.mode === "light"
    //         ? theme.palette.grey[200]
    //         : theme.palette.grey[800],
    //   }}
    // >
    //   <Container maxWidth="sm">
    //     <Typography variant="body1">
    //       My sticky footer can be found here.
    //     </Typography>
    //     <Copyright />
    //   </Container>
    // </Box>
    <Box
      component="footer"
      sx={{
        p: 6,
        background: `linear-gradient(to bottom, ${theme.palette.primary.main},${theme.palette.secondary.main})`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color={theme.palette.primary.tan}
              gutterBottom
            >
              About Us
            </Typography>
            <Typography variant="body2" color={theme.palette.primary.tan}>
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color={theme.palette.primary.tan}
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography variant="body2" color={theme.palette.primary.tan}>
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color={theme.palette.primary.tan}>
              Email: blah@blah.com
            </Typography>
            <Typography variant="body2" color={theme.palette.primary.tan}>
              Phone: (555) 555-5555
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color={theme.palette.primary.tan}
              gutterBottom
            >
              Follow Us
            </Typography>
            {/* <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link> */}
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography
            variant="body2"
            color={theme.palette.primary.tan}
            align="center"
          >
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {/* {new Date().getFullYear()} */}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
