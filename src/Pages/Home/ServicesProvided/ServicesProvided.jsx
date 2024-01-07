import React from "react";
import { StyledServicesProvidedSectionContainer } from "./ServicesProvided.styles";
import ServicesProvidedList from "./ServicesProvidedList/ServicesProvidedList";

export default function ServicesProvided() {
  return (
    <StyledServicesProvidedSectionContainer
      component={"section"}
      id={"services-provided-section"}
    >
      <ServicesProvidedList />
    </StyledServicesProvidedSectionContainer>
  );
}
