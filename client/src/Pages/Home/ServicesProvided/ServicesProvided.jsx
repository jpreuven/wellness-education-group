import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";
import {
  StyledServicesProvidedSectionContainer,
  StyledServicesProvidedOuterGrid,
  StyledServicesProvidedBackgroundWrapper,
} from "./ServicesProvided.styles";
import ServicesProvidedList from "./ServicesProvidedList/ServicesProvidedList";

export default function ServicesProvided() {
  return (
    <StyledServicesProvidedBackgroundWrapper>
      <StyledServicesProvidedSectionContainer
        component={"section"}
        id={"services-provided-section"}
      >
        <StyledServicesProvidedOuterGrid>
          <Typography
            sx={{ fontSize: "24px", color: theme.palette.secondary.tan }}
          >
            Services Provided
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              maxWidth: "700px",
              color: theme.palette.secondary.tan,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ad atque fugit quas repellendus dolor voluptatibus!
            Nesciunt consectetur sunt architecto deserunt nostrum veritatis.
            Tempore, nobis!
          </Typography>
        </StyledServicesProvidedOuterGrid>
        <ServicesProvidedList />
      </StyledServicesProvidedSectionContainer>
    </StyledServicesProvidedBackgroundWrapper>
  );
}
