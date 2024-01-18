import { Grid, Typography } from "@mui/material";
import React from "react";
import data from "./ServiceListData.data";
import testImg from "../../../../assets/images/wellness-logo.png";
import {
  StyledServiceListImageGrid,
  StyledServiceListOuterGrid,
  StyledServiceListTextGrid,
} from "./ServiceListData.styles";

export default function ServiceListData() {
  const serviceListJSX = data.map(({ title, content }, index) => {
    return (
      <StyledServiceListOuterGrid container key={index}>
        <StyledServiceListImageGrid
          item
          component={"img"}
          src={testImg}
          //   xs={12}
          //   md={4}
          order={index % 2 === 0 ? 2 : 1}
        />
        <StyledServiceListTextGrid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          order={index % 2 === 0 ? 1 : 2}
          //   xs={12}
          //   md={7}
        >
          <Typography
            variant={"h1"}
            component={"h1"}
            sx={{ margin: "0 !important" }}
          >
            {title}
          </Typography>
          <Typography>{content}</Typography>
        </StyledServiceListTextGrid>
      </StyledServiceListOuterGrid>
    );
  });
  return (
    <Grid sx={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
      {serviceListJSX}
    </Grid>
  );
}
