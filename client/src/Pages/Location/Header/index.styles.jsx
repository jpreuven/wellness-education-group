import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const StyledLocationHeaderBackgroundWrapper = styled(Box)(
  ({ theme }) => ({
    background: `linear-gradient(to bottom, ${theme.palette.primary.tan},${theme.palette.secondary.tan})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  })
);

export const StyledLocationHeaderSectionContainer = styled(Container)(
  ({ theme }) => ({
    display: "flex",
    overflow: "visible",
    paddingBlock: "4rem",

    [theme.breakpoints.down("sm")]: {
      paddingInline: "1rem",
    },
  })
);
