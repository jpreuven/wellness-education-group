import { Grid, Typography } from "@mui/material";
import React from "react";
import { StyledServicesProvidedSectionContainer } from "./ServicesProvided.styles";
import ServicesProvidedList from "./ServicesProvidedList/ServicesProvidedList";

export default function ServicesProvided() {
  return (
    <StyledServicesProvidedSectionContainer
      component={"section"}
      id={"services-provided-section"}
      sx={{ display: "flex", flexDirection: "column", gap: "5rem" }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "3rem",
        }}
      >
        <Typography sx={{ fontSize: "24px" }}>Services Provided</Typography>
        <Typography sx={{ fontSize: "18px", maxWidth: "700px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ad atque fugit quas repellendus dolor voluptatibus! Nesciunt
          consectetur sunt architecto deserunt nostrum veritatis. Tempore,
          nobis!
        </Typography>
      </Grid>
      <ServicesProvidedList />
    </StyledServicesProvidedSectionContainer>
  );
}
