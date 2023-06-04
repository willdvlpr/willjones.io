import React from "react";
import { styled } from "styled-components";
import { Button } from "@/components";
import { HOME_PAGE } from "@/utils/constants";

const { ABOUT_TEXT } = HOME_PAGE;

const Container = styled.div`
  text-align: center;
  color: #fff;
  padding: 100px;
  line-height: 35px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  margin-top: 60px;
`;

const Heading = styled.h1`
  color: #5ba5bd;
  font-size: 24px;
  margin-bottom: 60px;
`;

const AboutPage = () => {
  return (
    <Container>
      <Heading>About Me.</Heading>
      {ABOUT_TEXT.map((text) => {
        return <p>{text}</p>;
      })}
      <ButtonContainer>
        <Button link="/" label="Return" />
      </ButtonContainer>
    </Container>
  );
};

export default AboutPage;
