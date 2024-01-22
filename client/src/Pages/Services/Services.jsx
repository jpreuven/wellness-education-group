import React from "react";
import Hero from "./Hero/Hero";
import {
  StyledInnerDivider,
  StyledMainPageContainer,
} from "../../index.styles";
import ServiceCards from "./ServiceCards/ServiceCards";
import Footer from "./Footer/Footer";
import { StyledFooterDivider } from "../../index.styles";
import ServiceList from "./ServiceList/ServiceList";

export default function Services() {
  return (
    <StyledMainPageContainer>
      <Hero />
      <StyledInnerDivider />
      <ServiceList />
      <Footer />
    </StyledMainPageContainer>
  );
}
