import { Typography } from "@mui/material";
import React from "react";
import {
  StyledCompaniesSectionContainer,
  StyledCompaniesOuterGrid,
} from "./Companies.styles";
import CompaniesList from "./CompaniesList/CompaniesList";

export default function Companies() {
  return (
    <StyledCompaniesSectionContainer
      component={"section"}
      id={"companies-section"}
    >
      <StyledCompaniesOuterGrid>
        <Typography sx={{ fontSize: "24px", marginBottom: "3rem" }}>
          We accept...
        </Typography>
        <CompaniesList />
        <Typography
          sx={{
            fontSize: "24px",
            marginTop: "5rem",
            // maxWidth: "700px",
            width: "70%",
          }}
        >
          and many more! To see if we can help you with getting counseling
          services from your insurance , you can send us the front and back of
          your insurance card, your date of birth and adress
        </Typography>
      </StyledCompaniesOuterGrid>
    </StyledCompaniesSectionContainer>
  );
}
