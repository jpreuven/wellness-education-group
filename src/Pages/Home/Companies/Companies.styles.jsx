import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

export const StyledCompaniesBackgroundWrapper = styled(Box)(({ theme }) => ({
  background: "white",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));

export const StyledCompaniesSectionContainer = styled(Container)(
  ({ theme }) => ({
    display: "flex",
    overflow: "visible",
    paddingBlock: "4rem",
    [theme.breakpoints.up("md")]: {
      maxWidth: "1400px",
      paddingBlock: "6rem",
    },
  })
);
