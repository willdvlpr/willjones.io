import React from "react";
import { postData } from "@/data";
import { Button } from "@/components";
import { Preview } from "@/components";
import {
  StyledSectionContainer,
  StyledSection,
  StyledHeadingContainer,
  StyledHeading,
  StyledSubHeading,
  StyledSpan,
  StyledPreviewContainer,
} from "./styles";

interface AboutProps {
  heading: string;
  subHeading: string;
}

export const About = ({ heading, subHeading }: AboutProps) => {
  return (
    <StyledSectionContainer>
      <StyledSection>
        <StyledHeadingContainer>
          <StyledHeading>{heading}</StyledHeading>
          <StyledSubHeading>
            <StyledSpan>{subHeading}</StyledSpan>.
          </StyledSubHeading>
          <Button link="/about" label="About Me" />
        </StyledHeadingContainer>
        <StyledPreviewContainer>
          <Preview previewItems={postData} />
        </StyledPreviewContainer>
      </StyledSection>
    </StyledSectionContainer>
  );
};
