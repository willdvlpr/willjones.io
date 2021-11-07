import React from "react";
import Icon from "./Icon";
import styled from "styled-components";
import { iconData } from "../data/iconData";

const DisplayContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Display = (): JSX.Element => {
  return (
    <DisplayContainer>
      {iconData.map((icon) => (
        <Icon key={icon.id} icon={icon.icon} link={icon.link} />
      ))}
    </DisplayContainer>
  );
};

export default Display;
