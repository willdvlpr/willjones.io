import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  opacity: 0.7;
  transform: scale(0.6);
  transition: all 0.3s ease 0s;
  filter: invert(100%);
  &:hover {
    transform: translateY(0.1rem);
  }

  &:active {
    transform: translateY(-0.4rem);
  }

  @media ${device.md} {
    transform: scale(0.5);

    &:hover {
      transform: translateY(0rem);
      opacity: 0.8;
    }

    &:active {
      transform: translateY(0rem);
    }
  }

  @media ${device.sm} {
    transform: scale(0.4);
    width: 50px;
  }
`;

const IconLink = styled.a``;

interface IconProps {
  icon: string;
  link: string;
}
const Icon = ({ icon, link }: IconProps): JSX.Element => {
  return (
    <>
      <IconContainer>
        <IconLink href={link} target="_blank">
          <Image
            src={`/images/${icon}.svg`}
            height={120}
            width={120}
            alt="icon for social media profile"
          />
        </IconLink>
      </IconContainer>
    </>
  );
};

export default Icon;
