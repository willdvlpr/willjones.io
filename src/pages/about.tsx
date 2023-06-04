import React from "react";
import { HOME_PAGE, PAGE_PATHS } from "@/utils/constants";
import { Button } from "@/components";
import {
  StyledAboutContainer,
  StyledReturnContainer,
  StyledAboutHeading,
} from "@/styles/pageStyles";

const { ABOUT_TEXT } = HOME_PAGE;

const AboutPage = () => {
  return (
    <StyledAboutContainer>
      <StyledAboutHeading>About Me.</StyledAboutHeading>
      {ABOUT_TEXT.map((text) => {
        return <p>{text}</p>;
      })}
      <StyledReturnContainer>
        <Button link={PAGE_PATHS.HOME} label="Return" />
      </StyledReturnContainer>
    </StyledAboutContainer>
  );
};

export default AboutPage;
