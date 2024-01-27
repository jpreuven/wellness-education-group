import { Grid } from "@mui/material";
import React from "react";
import {
  StyledLocationHeaderBackgroundWrapper,
  StyledLocationHeaderSectionContainer,
} from "./index.styles";

export default function Header() {
  return (
    // <StyledLocationHeaderBackgroundWrapper>
    <StyledLocationHeaderSectionContainer
      component={"section"}
      id={"location-header-section"}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h1>Location</h1>
        <p>Come and visit us at our location</p>
      </Grid>
    </StyledLocationHeaderSectionContainer>
    // </StyledLocationHeaderBackgroundWrapper>
  );
}
