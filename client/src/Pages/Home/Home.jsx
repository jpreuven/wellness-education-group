import React from "react";
import { StyledMainPageContainer } from "../../index.styles";
import Hero from "./Hero/Hero";
import ServicesProvided from "./ServicesProvided/ServicesProvided";
import Companies from "./Companies/Companies";
import { StyledInnerDivider } from "../../index.styles";

export default function Home() {
  return (
    <StyledMainPageContainer id="home-page-container">
      <Hero />
      <ServicesProvided />
      <StyledInnerDivider />
      <Companies />
    </StyledMainPageContainer>
  );
}
