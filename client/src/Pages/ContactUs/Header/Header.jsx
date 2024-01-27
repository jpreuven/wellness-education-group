import { Typography } from "@mui/material";
import React from "react";
import {
  StyledContactUsFooterBackgroundWrapper,
  StyledContactUsFooterSectionContainer,
} from "./index.styles";
import useMediaQueries from "../../../utils/mediaqueries.utils";
import theme from "../../../theme/theme";

export default function Footer() {
  const { isLg } = useMediaQueries();
  return (
    <StyledContactUsFooterBackgroundWrapper>
      <StyledContactUsFooterSectionContainer
        component={"section"}
        id={"contact-us-footer-section"}
      >
        <Typography sx={{ fontSize: isLg ? "20px" : "16px" }}>
          Have any questions? Feel free to reach out to us using the form below,
          or email us directly at blah@blah.com or{" "}
          <a
            href="mailto:blah@blah.com"
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
          >
            click here
          </a>
          .
        </Typography>
      </StyledContactUsFooterSectionContainer>
    </StyledContactUsFooterBackgroundWrapper>
  );
}
