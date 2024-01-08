import React from "react";
import { StyledCompaniesSectionContainer } from "./Companies.styles";
import CompaniesList from "./CompaniesList/CompaniesList";

export default function Companies() {
  return (
    <StyledCompaniesSectionContainer
      component={"section"}
      id={"companies-section"}
    >
      <CompaniesList />
    </StyledCompaniesSectionContainer>
  );
}
