import React from "react";
import EmailForm from "../../../components/Form/EmailForm";
import { StyledFormSectionContainer } from "./index.styles";

export default function FormSection() {
  return (
    <StyledFormSectionContainer
      component={"section"}
      id={"form-section-container"}
    >
      <EmailForm />
    </StyledFormSectionContainer>
  );
}
