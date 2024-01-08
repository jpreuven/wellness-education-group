import React, { useState } from "react";
import {
  StyledCompaniesSectionContainer,
  StyledCompaniesBackgroundWrapper,
  StyledCompaniesImage,
} from "./Companies.styles";
import LAUSDLogo from "../../../assets/images/LAUSD-Logo.jpg";
import { Grid } from "@mui/material";
import "./Companies.css";

export default function Companies() {
  const [yCoordinate, setYCoordinate] = useState(false);
  function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 616) {
      setYCoordinate(true);
      // console.log(`Scroll position: ${scrollPosition}px`);
      // console.log(yCoordinate);
      // const h = document.querySelector(".slide-in-image");
      // console.log(h);
    } else {
      setYCoordinate(false);
    }
  }

  // Attach the scroll event listener to the window
  window.addEventListener("scroll", handleScroll);
  return (
    <StyledCompaniesBackgroundWrapper>
      <StyledCompaniesSectionContainer>
        {/* <Grid sx={{ display: "flex" }}> */}
        <StyledCompaniesImage
          className={`${yCoordinate ? "slide-in-image" : "not-slide-in-image"}`}
          component={"img"}
          src={LAUSDLogo}
        />
        <StyledCompaniesImage
          className={`${yCoordinate ? "slide-in-image" : "not-slide-in-image"}`}
          component={"img"}
          src={LAUSDLogo}
        />
        {/* </Grid> */}
      </StyledCompaniesSectionContainer>
    </StyledCompaniesBackgroundWrapper>
  );
}
