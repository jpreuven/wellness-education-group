import React from "react";
import {
  StyledContactUsFooterBackgroundWrapper,
  StyledContactUsFooterSectionContainer,
} from "./index.styles";

export default function Footer() {
  return (
    <StyledContactUsFooterBackgroundWrapper>
      <StyledContactUsFooterSectionContainer
        component={"section"}
        id={"contact-us-footer-section"}
      >
        Have any questions? Feel free to reach out to us using the form below,
        or email us directly at blah@blah.com or click here.
      </StyledContactUsFooterSectionContainer>
    </StyledContactUsFooterBackgroundWrapper>
  );
}
