import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledLocationSectionContainer = styled(Container)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: "none !important",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    marginLeft: "0 !important",
    marginRight: "0 !important",
    overflow: "visible",

    [theme.breakpoints.down("sm")]: {
      paddingInline: "1rem",
    },
  })
);
