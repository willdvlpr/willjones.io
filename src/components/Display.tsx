import React from "react";
import Icon from "./Icon";
import styled from "styled-components";

const DisplayContainer = styled.div`
  margin-top: 5px;
  height: 100px;
`;

const LeftDisplayContainer = styled.div`
  position: relative;
  float: left;
  display: flex;
  justify-content: right;
  padding-right: 70px;
  width: 50%;
  height: 400px;
`;
const RightDisplayContainer = styled.div`
  position: relative;
  float: right;
  display: flex;
  padding-left: 70px;
  width: 50%;
  height: 400px;
`;

const Display = (): JSX.Element => {
  return (
    <DisplayContainer>
      <LeftDisplayContainer>
        <Icon icon="github" link="https://github.com/willjonestech" />
        <Icon
          icon="linkedin"
          link="https://www.linkedin.com/in/william-jones-3839b5133/"
        />
      </LeftDisplayContainer>
      <RightDisplayContainer>
        <Icon icon="medium" link="https://willdvlpr.medium.com/" />
        <Icon
          icon="youtube"
          link="https://www.youtube.com/channel/UCSFp5DQrZemnjP5p8XYg7JA"
        />
      </RightDisplayContainer>
    </DisplayContainer>
  );
};

export default Display;
