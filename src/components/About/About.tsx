import React from "react";
import { postData } from "@/data";
import { Preview } from "@/components";
import {
  StyledSectionContainer,
  StyledSection,
  StyledHeadingContainer,
  StyledHeading,
  StyledSubHeading,
  StyledSpan,
  StyledAbout,
  StyledPreviewContainer,
} from "./styles";

interface AboutProps {
  heading: string;
  subHeading: string;
  description: string[];
}

export const About = ({ heading, subHeading, description }: AboutProps) => {
  return (
    <StyledSectionContainer>
      <StyledSection>
        <StyledHeadingContainer>
          <StyledHeading>{heading}</StyledHeading>
          <StyledSubHeading>
            <StyledSpan>{subHeading}</StyledSpan>.
          </StyledSubHeading>
          <StyledAbout>
            {description.map((text) => {
              return <p key={text}>{text}</p>;
            })}
          </StyledAbout>
        </StyledHeadingContainer>
      </StyledSection>
      <StyledSection>
        <StyledPreviewContainer>
          <Preview previewItems={postData} />
        </StyledPreviewContainer>
      </StyledSection>
    </StyledSectionContainer>
  );
};
