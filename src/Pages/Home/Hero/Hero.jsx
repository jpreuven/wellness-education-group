import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import {
  StyledHeroSectionContainer,
  StyledHeroBackgroundWrapper,
  StyledHeroGridContainer,
  StyledHeroGridTextItem,
  StyledHeroGridImageItem,
  StyledHeroImage,
  StyledHeroTextHeader,
  StyledHeroTextContent,
  StyledHeroButton,
} from "./Hero.styles";
import useMediaQueries from "../../../utils/mediaqueries.utils";

import logo from "../../../assets/images/wellness-logo.png";

export default function Hero() {
  const { isXs, isLg } = useMediaQueries();

  return (
    <StyledHeroBackgroundWrapper>
      <StyledHeroSectionContainer component="section">
        <StyledHeroGridContainer container>
          <StyledHeroTextHeader>
            Welcome to Wellness and Education Group
          </StyledHeroTextHeader>
          <StyledHeroTextContent variant={isLg ? "body1" : "body2"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            sed ratione ullam vitae. Tempore eaque dolorum ab? Illum fuga
            placeat maiores expedita in voluptas blanditiis quo laborum alias
            reprehenderit excepturi corporis quod doloremque recusandae sed
            rerum dignissimos nemo aperiam magnam voluptatibus numquam, magni
            hic. Possimus tempore officiis perspiciatis sequi alias?
          </StyledHeroTextContent>
          <StyledHeroButton>About Wellness</StyledHeroButton>
        </StyledHeroGridContainer>
      </StyledHeroSectionContainer>
    </StyledHeroBackgroundWrapper>
  );
}
