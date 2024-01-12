import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { servicesProvidedListData } from "./ServicesProvidedList.data";
import {
  StyledServicesProvidedListOuterGrid,
  StyledServicesProvidedListInnerGrid,
  StyledServicesProvidedListLogoGrid,
  StyledServicesProvidedListLogoTypography,
} from "./ServicesProvidedList.styles";
import "./ServicesProvidedList.css";

export default function ServicesProvidedList() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  }, []);
  const servicesProvidedList = servicesProvidedListData.map(
    ({ logo, title, caption }, index) => {
      return (
        <StyledServicesProvidedListInnerGrid
          item
          className={`${
            pageLoaded
              ? "services-provided-slidein"
              : "not-services-provided-slidein"
          }`}
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
