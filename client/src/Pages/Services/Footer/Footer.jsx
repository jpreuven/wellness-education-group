import { Button } from "@mui/base";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import React from "react";
import {
  StyledServicesFooterBackgroundWrapper,
  StyledServicesFooterButton,
  StyledServicesFooterSectionContainer,
} from "./index.styles";

export default function Footer() {
  return (
    <StyledServicesFooterBackgroundWrapper>
      <StyledServicesFooterSectionContainer
        component={"section"}
        id={"services-footer-section"}
      >
        <Typography
          sx={{
            textAlign: "center",
            maxWidth: "300px",
            marginBottom: "20px",
            fontSize: "23px",
          }}
        >
          Have any questions? Reach out to us!
        </Typography>
        <Link to={"/contact-us"}>
          <StyledServicesFooterButton>
            Contact us Now!
          </StyledServicesFooterButton>
        </Link>
      </StyledServicesFooterSectionContainer>
    </StyledServicesFooterBackgroundWrapper>
  );
}
