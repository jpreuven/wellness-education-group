import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../../../theme/theme";
import { servicesProvidedListData } from "./ServicesProvidedList.data";

export default function ServicesProvidedList() {
  const servicesProvidedList = servicesProvidedListData.map(
    ({ logo, title, caption }, index) => {
      return (
        <Grid
          item
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
          xs={12}
          sm={5}
          md={4}
          lg={2}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                background: `linear-gradient(to top, ${theme.palette.primary.main},${theme.palette.secondary.main})`,
                borderRadius: "50%",
                width: "125px",
                height: "125px",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              {logo}
            </Typography>
          </Box>
          <Typography>{title}</Typography>
          <Typography>{caption}</Typography>
        </Grid>
      );
    }
  );

  return (
    <Grid container sx={{ display: "flex", justifyContent: "space-evenly" }}>
      {servicesProvidedList}
    </Grid>
  );
}
