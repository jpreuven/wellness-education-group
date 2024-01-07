import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../../../theme/theme";
import { servicesProvidedListData } from "./ServicesProvidedList.data";
import {
  StyledServicesProvidedListOuterGrid,
  StyledServicesProvidedListInnerGrid,
  StyledServicesProvidedListLogoGrid,
  StyledServicesProvidedListLogoTypography,
} from "./ServicesProvidedList.styles";

export default function ServicesProvidedList() {
  const servicesProvidedList = servicesProvidedListData.map(
    ({ logo, title, caption }, index) => {
      return (
        <StyledServicesProvidedListInnerGrid
          item
          key={index}
          xs={12}
          sm={5}
          md={4}
          lg={2}
        >
          <StyledServicesProvidedListLogoGrid>
            <StyledServicesProvidedListLogoTypography>
              {logo}
            </StyledServicesProvidedListLogoTypography>
          </StyledServicesProvidedListLogoGrid>
          <Typography variant="h6" component="h6">
            {title}
          </Typography>
          <Typography>{caption}</Typography>
        </StyledServicesProvidedListInnerGrid>
      );
    }
  );

  return (
    <StyledServicesProvidedListOuterGrid container>
      {servicesProvidedList}
    </StyledServicesProvidedListOuterGrid>
  );
}
