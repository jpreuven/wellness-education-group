import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  StyledServicesProvidedSectionContainer,
  StyledServicesProvidedOuterGrid,
} from "./ServicesProvided.styles";
import ServicesProvidedList from "./ServicesProvidedList/ServicesProvidedList";

export default function ServicesProvided() {
  return (
    <StyledServicesProvidedSectionContainer
      component={"section"}
      id={"services-provided-section"}
    >
      <StyledServicesProvidedOuterGrid>
        <Typography sx={{ fontSize: "24px" }}>Services Provided</Typography>
        <Typography sx={{ fontSize: "18px", maxWidth: "700px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ad atque fugit quas repellendus dolor voluptatibus! Nesciunt
          consectetur sunt architecto deserunt nostrum veritatis. Tempore,
          nobis!
        </Typography>
      </StyledServicesProvidedOuterGrid>
      <ServicesProvidedList />
    </StyledServicesProvidedSectionContainer>
  );
}
