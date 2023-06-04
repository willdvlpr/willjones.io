import React from "react";
import {
  StyledHeadingContainer,
  StyledHeading,
  StyledSubHeading,
  StyledSpan,
} from "./styles";

interface HeadingsProps {
  heading: string;
  subHeading: string;
}

export const Headings = ({ heading, subHeading }: HeadingsProps) => {
  return (
    <StyledHeadingContainer>
      <StyledHeading>{heading}</StyledHeading>
      <StyledSubHeading>
        <StyledSpan>{subHeading}</StyledSpan>.
      </StyledSubHeading>
    </StyledHeadingContainer>
  );
};
