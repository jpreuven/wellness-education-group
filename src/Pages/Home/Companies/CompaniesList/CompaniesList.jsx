import React, { useState } from "react";
import { StyledCompaniesImage } from "./CompaniesList.styles";
import firstHealth from "../../../../assets/images/First-Health-Logo.jpg";
import healthNet from "../../../../assets/images/Health-Net-logo.png";
import kaiserLogo from "../../../../assets/images/kaiser-logo.png";
import mhnLogo from "../../../../assets/images/MHN-Logo.png";
import "./CompaniesList.css";
import { StyledCompaniesListImageGrid } from "./CompaniesList.styles";

export default function CompaniesList() {
  const logos = [firstHealth, healthNet, kaiserLogo, mhnLogo];
  const [yCoordinate, setYCoordinate] = useState(false);
  function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 350) {
      setYCoordinate(true);
      window.removeEventListener("scroll", handleScroll);
    }
  }
  window.addEventListener("scroll", handleScroll);
  const logosJSX = logos.map((logo, index) => {
    return (
      <StyledCompaniesImage
        item
        key={index}
        className={`${
          yCoordinate
            ? "companies-slide-in-image"
            : "companies-not-slide-in-image"
        }-${index}`}
        component={"img"}
        src={logo}
        xs={12}
        sm={5}
        md={4}
        lg={2}
      />
    );
  });
  return (
    <StyledCompaniesListImageGrid container>
      {logosJSX}
    </StyledCompaniesListImageGrid>
  );
}
