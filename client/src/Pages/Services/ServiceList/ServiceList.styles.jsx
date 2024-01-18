import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledServiceListSectionContainer = styled(Container)(
  ({ theme }) => ({
    display: "flex",
    overflow: "visible",
    paddingBlock: "4rem",
    maxWidth: "1140px !important",

    [theme.breakpoints.down("sm")]: {
      paddingInline: "1rem",
    },
  })
);
