import { Typography } from "@mui/material";
import React from "react";
import { StyledHeroSectionContainer } from "./index.styles";
import theme from "../../../theme/theme";

export default function Hero() {
  return (
    <StyledHeroSectionContainer
      component={"section"}
      id={"services-hero-section"}
    >
      <Typography
        component={"h1"}
        varient={"h1"}
        sx={{ fontSize: "32px", textAlign: "center", fontWeight: "900" }}
      >
        <span style={{ color: theme.palette.primary.main }}>Wellness </span>
        offers a wide range of services designed to meet your needs, catering to
        all ages!
      </Typography>
    </StyledHeroSectionContainer>
  );
}
