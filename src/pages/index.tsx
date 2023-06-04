import React from "react";
import { socialData, postData } from "@/data";
import { HOME_PAGE, PAGE_PATHS } from "@/utils/constants";
import { NavBar } from "@/components";
import { Headings } from "@/components/";
import { Preview } from "@/components";
import { Footer } from "@/components";
import { Button } from "@/components";
import {
  StyledHomeContainer,
  StyledHomeSection,
  StyledPreviewContainer,
} from "@/styles/pageStyles";

const { HEADING, SUB_HEADING } = HOME_PAGE;

const Index = () => {
  return (
    <StyledHomeContainer>
      <NavBar navItems={socialData} />
      <StyledHomeSection>
        <Headings heading={HEADING} subHeading={SUB_HEADING} />
        <Button link={PAGE_PATHS.ABOUT} label="About Me" />
        <StyledPreviewContainer>
          <Preview previewItems={postData} />
        </StyledPreviewContainer>
      </StyledHomeSection>
      <Footer />
    </StyledHomeContainer>
  );
};

export default Index;
