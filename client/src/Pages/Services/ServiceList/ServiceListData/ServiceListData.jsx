import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import data from "./ServiceListData.data";
import testImg from "../../../../assets/images/wellness-logo.png";
import {
  StyledServiceListImageGrid,
  StyledServiceListOuterGrid,
  StyledServiceListTextGrid,
  StyledServiceListImageBox,
} from "./ServiceListData.styles";

export default function ServiceListData() {
  const serviceListJSX = data.map(({ title, content }, index) => {
    return (
      <StyledServiceListOuterGrid container key={index}>
        <StyledServiceListImageBox
          xs={12}
          sm={4.5}
          order={1}
          sx={{
            "@media (min-width: 715px)": {
              order: index % 2 === 0 ? 2 : 1,
            },
          }}
        >
          <StyledServiceListImageGrid
            item
            component={"img"}
            src={testImg}
            width={"100%"}
          />
        </StyledServiceListImageBox>
        <StyledServiceListTextGrid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "@media (min-width: 715px)": {
              order: index % 2 === 0 ? 1 : 2,
              padding:
                index % 2 === 0 ? "0px 15px 0px 0px" : "0px 0px 0px 15px",
            },
          }}
          xs={12}
          sm={6}
          order={2}
        >
          <Typography
            variant={"h1"}
            component={"h1"}
            sx={{ margin: "0 !important" }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              "@media (min-width: 920px)": { fontSize: "20px" },
              "@media (min-width: 950px)": { fontSize: "22px" },
            }}
          >
            {content}
          </Typography>
        </StyledServiceListTextGrid>
      </StyledServiceListOuterGrid>
    );
  });
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        width: "90%",
        margin: "auto",
      }}
    >
      {serviceListJSX}
    </Grid>
  );
}
