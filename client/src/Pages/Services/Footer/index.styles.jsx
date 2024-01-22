import styled from "@emotion/styled";
import { Box, Button, Container } from "@mui/material";

export const StyledServicesFooterBackgroundWrapper = styled(Box)(
  ({ theme }) => ({
    background: `linear-gradient(to bottom, ${theme.palette.primary.tan},${theme.palette.secondary.tan})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  })
);

export const StyledServicesFooterSectionContainer = styled(Container)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    paddingBlock: "4rem",
    [theme.breakpoints.up("sm")]: {
      minHeight: "300px",
    },

    [theme.breakpoints.down("sm")]: {
      paddingInline: "1rem",
    },
  })
);

export const StyledServicesFooterButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.tan,
  backgroundColor: theme.palette.secondary.main,
  maxHeight: "55px",
  borderRadius: "40px",
  maxWidth: "250px",
  height: "75px",
  textTransform: "capitalize",

  "&:hover": {
    color: theme.palette.primary.tan,
    backgroundColor: theme.palette.primary.main,
  },
}));
