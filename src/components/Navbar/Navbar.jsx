import { Grid, Input, InputLabel } from "@mui/material";
import React, { useState } from "react";
import { StyledNavbarOuterGrid, StyledNavbarLinksGrid } from "./Navbar.styles";
import NavbarData from "./Navbar.data";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import useMediaQueries from "../../utils/mediaqueries.utils";

export default function Navbar() {
  const [checked, SetChecked] = useState(false);
  const { isMd } = useMediaQueries();
  console.log(checked);
  if (isMd) {
    return (
      <StyledNavbarOuterGrid id="navbar-container">
        <Grid sx={{ flexShrink: "0" }}>Wellness Logo</Grid>
        <StyledNavbarLinksGrid>
          <NavbarData />
        </StyledNavbarLinksGrid>
      </StyledNavbarOuterGrid>
    );
  } else {
    return (
      <Grid
        sx={{
          width: "100%",
          minHeight: "75px",
          backgroundColor: "white",
          position: "sticky",
          top: 0,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          padding: "25px 15px",
          boxShadow: checked ? "none" : "0px 2px 3px lightgray",
        }}
      >
        <Input
          type="checkbox"
          id="navbar-checkbox-toggle"
          sx={{ display: "none" }}
        />
        <InputLabel
          htmlFor="navbar-checkbox-toggle"
          className="navbar-hamburger"
          onClick={() => {
            SetChecked(!checked);
          }}
          sx={{ fontSize: "20px" }}
        >
          &#9776;
        </InputLabel>
        {checked ? <MobileNavbar sx={{}} /> : null}
      </Grid>
    );
  }
}
