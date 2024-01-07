import React from "react";
import { StyledMainPageContainer } from "./Home.styles";
import Hero from "./Hero/Hero";
import ServicesProvided from "./ServicesProvided/ServicesProvided";
import Companies from "./Companies/Companies";

export default function Home() {
  return (
    <StyledMainPageContainer id="home-page-container">
      <Hero />
      <ServicesProvided />
      <Companies />
    </StyledMainPageContainer>
  );
}
