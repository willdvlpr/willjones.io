import React from "react";
import { StyledButtonContainer, StyledLink } from "./styles";

interface ButtonProps {
  link: string;
  label: string;
}

export const Button = ({ link, label }: ButtonProps) => {
  return (
    <StyledButtonContainer>
      <StyledLink href={link}>{label}</StyledLink>
    </StyledButtonContainer>
  );
};
