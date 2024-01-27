import { Grid } from "@mui/material";
import React from "react";
import {
  StyledLocationFooterBackgroundWrapper,
  StyledLocationFooterSectionContainer,
} from "./index.styles";

export default function Footer() {
  return (
    <StyledLocationFooterBackgroundWrapper>
      <StyledLocationFooterSectionContainer
        component={"section"}
        id={"location-footer-section"}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Grid sx={{ display: "flex", flexDirection: "column" }}>
            <h2>Address</h2>
            <p style={{ margin: 0 }}>Address line 1</p>
            <p style={{ margin: 0 }}>Address line 2</p>
            <p style={{ margin: 0 }}>Address line 3</p>
          </Grid>
          <Grid sx={{ display: "flex", flexDirection: "column" }}>
            <h2>Contact</h2>
            <p style={{ margin: 0 }}>Contact line 1</p>
            <p style={{ margin: 0 }}>Contact line 2</p>
            <p style={{ margin: 0 }}>Contact line 3</p>
          </Grid>
        </Grid>
      </StyledLocationFooterSectionContainer>
    </StyledLocationFooterBackgroundWrapper>
  );
}
