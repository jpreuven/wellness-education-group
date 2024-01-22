import React from "react";
import { StyledMainPageContainer } from "../../index.styles";
import { StyledContactUsSectionContainer } from "./index.styles";
import FormSection from "./FormSection/FormSection";

export default function ContactUs() {
  return (
    <StyledMainPageContainer id="home-page-container">
      <FormSection />
    </StyledMainPageContainer>
  );
}
