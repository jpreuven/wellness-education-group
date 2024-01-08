import React from "react";
import { StyledMainPageContainer } from "./Home.styles";
import Hero from "./Hero/Hero";
import ServicesProvided from "./ServicesProvided/ServicesProvided";
import Companies from "./Companies/Companies";
import { StyledDivider } from "../../index.styles";

export default function Home() {
  return (
    <StyledMainPageContainer id="home-page-container">
      <Hero />
      <ServicesProvided />
      <StyledDivider />
      {/* <Divider /> */}
      <Companies />
    </StyledMainPageContainer>
  );
}
