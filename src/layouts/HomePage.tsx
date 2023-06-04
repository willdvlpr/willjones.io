import React from "react";
import { socialData } from "@/data";
import { HOME_PAGE } from "@/utils/constants";
import { NavBar } from "@/components";
import { About } from "@/components";
import { Footer } from "@/components";
import { StyledContainer } from "./styles";

const { HEADING, SUB_HEADING } = HOME_PAGE;

export const HomePage = () => {
  return (
    <StyledContainer>
      <NavBar navItems={socialData} />
      <About heading={HEADING} subHeading={SUB_HEADING} />
      <Footer />
    </StyledContainer>
  );
};
