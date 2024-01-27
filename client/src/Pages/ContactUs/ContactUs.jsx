import React from "react";
import { StyledMainPageContainer } from "../../index.styles";
import { StyledContactUsSectionContainer } from "./index.styles";
import FormSection from "./FormSection/FormSection";
import Footer from "./Header/Header";

export default function ContactUs() {
  return (
    <StyledMainPageContainer id="home-page-container">
      <Footer />
      <FormSection />
    </StyledMainPageContainer>
  );
}
