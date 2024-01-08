import { Grid } from "@mui/material";
import React from "react";
import { StyledNavbarOuterGrid, StyledNavbarLinksGrid } from "./Navbar.styles";
import NavbarData from "./Navbar.data";

export default function Navbar() {
  return (
    <StyledNavbarOuterGrid id="navbar-container">
      <Grid sx={{ flexShrink: "0" }}>Wellness Logo</Grid>
      <StyledNavbarLinksGrid>
        <NavbarData />
      </StyledNavbarLinksGrid>
    </StyledNavbarOuterGrid>
  );
}
