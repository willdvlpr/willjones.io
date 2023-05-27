import React from "react";
import { NavBar } from "@/components";
import { Preview } from "@/components";
import Footer from "../components/Footer";
import { Container, HeadingContainer, Heading, SubHeading } from "./styles";

export const HomePage = () => {
  return (
    <Container>
      <NavBar />
      <HeadingContainer>
        <Heading>Will Jones</Heading>
        <SubHeading>Software Engineer</SubHeading>
      </HeadingContainer>
      <Preview />
      <Footer />
    </Container>
  );
};
