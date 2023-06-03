import React from "react";
import { HOME_PAGE } from "@/utils/constants";
import { Preview } from "@/components";
import {
  StyledSectionContainer,
  StyledSection,
  StyledHeadingContainer,
  StyledHeading,
  StyledSubHeading,
  StyledSpan,
  StyledAbout,
} from "./styles";

const { HEADING, ABOUT_TEXT } = HOME_PAGE;

export const About = () => {
  return (
    <StyledSectionContainer>
      <StyledSection>
        <StyledHeadingContainer>
          <StyledHeading>{HEADING}</StyledHeading>
          <StyledSubHeading>
            Software <StyledSpan>Engineer</StyledSpan>.
          </StyledSubHeading>
          <StyledAbout>
            {ABOUT_TEXT.map((text) => {
              return <p key={text}>{text}</p>;
            })}
          </StyledAbout>
        </StyledHeadingContainer>
      </StyledSection>
      <StyledSection>
        <Preview />
      </StyledSection>
    </StyledSectionContainer>
  );
};
