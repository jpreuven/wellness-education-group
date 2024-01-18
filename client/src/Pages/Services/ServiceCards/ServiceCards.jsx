import { Grid } from "@mui/material";
import React from "react";
import ServiceCardComponent from "./ServiceCardComponent/ServiceCardComponent";
import {
  StyledServiceCardsSectionContainer,
  StyledServiceCardsOuterGrid,
} from "./ServiceCards.styles";

export default function ServiceCards() {
  return (
    <StyledServiceCardsSectionContainer component={"section"}>
      <StyledServiceCardsOuterGrid container>
        <ServiceCardComponent item xs={12} sm={7} md={4} lg={2} />
        <ServiceCardComponent item xs={12} sm={7} md={4} lg={2} />
        <ServiceCardComponent item xs={12} sm={7} md={4} lg={2} />
        <ServiceCardComponent item xs={12} sm={7} md={4} lg={2} />
      </StyledServiceCardsOuterGrid>
    </StyledServiceCardsSectionContainer>
  );
}
