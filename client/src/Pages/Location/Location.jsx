import { Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "./Footer/Footer";
import GoogleMap from "./GoogleMap/GoogleMap";
import Header from "./Header/Header";
import { StyledLocationSectionContainer } from "./index.styles";

export default function Location() {
  return (
    <StyledLocationSectionContainer id={"testing1"}>
      <Header />
      <GoogleMap />
      <Footer />
    </StyledLocationSectionContainer>
  );
}
