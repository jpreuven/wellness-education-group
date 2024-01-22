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
  StyledHeroContentGrid,
} from "./Hero.styles";
import useMediaQueries from "../../../utils/mediaqueries.utils";

import logo from "../../../assets/images/wellness-logo.png";
import theme from "../../../theme/theme";

export default function Hero() {
  const { isXs, isLg, isSm } = useMediaQueries();

  return (
    <StyledHeroBackgroundWrapper>
      <StyledHeroSectionContainer component="section">
        <StyledHeroGridContainer container>
          <StyledHeroContentGrid container>
            <Grid item xs={12} lg={5}>
              <StyledHeroImage src={logo} />
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: isSm ? "center" : "flex-start",
                // textAlign: "center",
              }}
              xs={12}
              lg={5}
            >
              <StyledHeroTextHeader>
                <span style={{ color: theme.palette.primary.main }}>
                  Welcome {""}
                </span>
                to Wellness and Education Group
              </StyledHeroTextHeader>
              <StyledHeroTextContent variant={isLg ? "body1" : "body2"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi sed ratione ullam vitae. Tempore eaque dolorum ab?
                Illum fuga placeat maiores expedita in voluptas blanditiis quo
                laborum alias reprehenderit excepturi corporis quod doloremque
                recusandae sed rerum dignissimos nemo aperiam magnam
                voluptatibus numquam, magni hic. Possimus tempore officiis
                perspiciatis sequi alias?
              </StyledHeroTextContent>
            </Grid>
          </StyledHeroContentGrid>
          <Grid>
            <StyledHeroButton>About Wellness</StyledHeroButton>
          </Grid>
        </StyledHeroGridContainer>
      </StyledHeroSectionContainer>
    </StyledHeroBackgroundWrapper>
  );
}
