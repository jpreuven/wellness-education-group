import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledServiceCardsSectionContainer = styled(Container)(
  ({ theme }) => ({
    display: "flex",
    overflow: "visible",
    paddingBlock: "4rem",

    [theme.breakpoints.down("sm")]: {
      paddingInline: "1rem",
    },
  })
);

export const StyledServiceCardsOuterGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  gap: "2rem",
  [theme.breakpoints.up("xl")]: {
    justifyContent: "space-evenly",
  },
}));
