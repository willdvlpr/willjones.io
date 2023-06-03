import React from "react";
import { NavBar } from "@/components";
import { About } from "@/components";
import { Footer } from "@/components";
import { StyledContainer } from "./styles";

export const HomePage = () => {
  return (
    <StyledContainer>
      <NavBar />
      <About />

      <Footer />
    </StyledContainer>
  );
};
