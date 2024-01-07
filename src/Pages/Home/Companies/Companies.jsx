import React from "react";
import {
  StyledCompaniesSectionContainer,
  StyledCompaniesBackgroundWrapper,
} from "./Companies.styles";
import LAUSDLogo from "../../../assets/images/LAUSD-Logo.jpg";

export default function Companies() {
  return (
    <StyledCompaniesBackgroundWrapper>
      <StyledCompaniesSectionContainer>
        <img style={{ width: "200px", height: "200px" }} src={LAUSDLogo} />
      </StyledCompaniesSectionContainer>
    </StyledCompaniesBackgroundWrapper>
  );
}
