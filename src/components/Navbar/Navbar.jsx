import { Grid, Typography } from "@mui/material";
import React from "react";
import useMediaQueries from "../../utils/mediaqueries.utils";
import {
  StyledNavbarOuterGrid,
  StyledNavbarLinksGrid,
  StyledNavbarLinks,
  StyledNavbarBoxLinks,
} from "./Navbar.styles";

export default function Navbar() {
  const { isLg, isXl } = useMediaQueries();
  return (
    <StyledNavbarOuterGrid id="navbar-container">
      <Grid sx={{ flexShrink: "0" }}>Wellness Logo</Grid>
      <StyledNavbarLinksGrid>
        <StyledNavbarLinks>
          <StyledNavbarBoxLinks>
            <Typography sx={{ fontSize: isXl ? "18px" : "14px" }}>
              About Us
            </Typography>
          </StyledNavbarBoxLinks>
        </StyledNavbarLinks>
        <StyledNavbarLinks style={{ textDecoration: "none" }}>
          <StyledNavbarBoxLinks>
            <Typography sx={{ fontSize: isXl ? "18px" : "14px" }}>
              Services
            </Typography>
          </StyledNavbarBoxLinks>
        </StyledNavbarLinks>
        <StyledNavbarLinks style={{ textDecoration: "none" }}>
          <StyledNavbarBoxLinks>
            <Typography sx={{ fontSize: isXl ? "18px" : "14px" }}>
              Contact Us
            </Typography>
          </StyledNavbarBoxLinks>
        </StyledNavbarLinks>
        <StyledNavbarLinks style={{ textDecoration: "none" }}>
          <StyledNavbarBoxLinks>
            <Typography sx={{ fontSize: isXl ? "18px" : "14px" }}>
              Internship Opportunities
            </Typography>
          </StyledNavbarBoxLinks>
        </StyledNavbarLinks>
      </StyledNavbarLinksGrid>
    </StyledNavbarOuterGrid>
  );
}
