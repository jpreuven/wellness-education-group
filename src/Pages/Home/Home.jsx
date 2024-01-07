import React from "react";
import { StyledMainPageContainer } from "./Home.styles";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <StyledMainPageContainer id="home-page-container">
      <Hero />
    </StyledMainPageContainer>
  );
}
