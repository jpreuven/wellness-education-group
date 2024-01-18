import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledHeroSectionContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  overflow: "visible",
  paddingBlock: "4rem",

  [theme.breakpoints.down("sm")]: {
    paddingInline: "1rem",
  },
}));
