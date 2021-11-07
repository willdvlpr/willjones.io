import React from "react";
import Icon from "./Icon";
import styled from "styled-components";

const DisplayContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Display = (): JSX.Element => {
  return (
    <DisplayContainer>
      <Icon icon="github" link="https://github.com/willdvlpr" />
      <Icon
        icon="linkedin"
        link="https://www.linkedin.com/in/william-jones-3839b5133/"
      />
      <Icon icon="medium" link="https://willdvlpr.medium.com/" />
      <Icon
        icon="youtube"
        link="https://www.youtube.com/channel/UCSFp5DQrZemnjP5p8XYg7JA"
      />
    </DisplayContainer>
  );
};

export default Display;
