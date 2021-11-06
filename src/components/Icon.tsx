import Image from "next/image";
import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  opacity: 0.4;
  transform: scale(0.6);
  //   margin: 0 50px 0 50px;
  transition: all 0.3s ease 0s;
  &:hover {
    transform: translateY(0.1rem);
  }

  &:active {
    transform: translateY(-0.4rem);
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
          <Image src={`/images/${icon}.svg`} height={120} width={120} />
        </IconLink>
      </IconContainer>
    </>
  );
};

export default Icon;
