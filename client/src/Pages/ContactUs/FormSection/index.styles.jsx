import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const StyledFormSectionContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  overflow: "visible",
  paddingBlock: "4rem",
  justifyContent: "center",
  alignContent: "center",

  [theme.breakpoints.down("sm")]: {
    paddingInline: "1rem",
  },
}));
