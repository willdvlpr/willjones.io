import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";
import { footerCopyRightData } from "../data";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  top: 100%;
  width: 100%;
  height: 100px;

  @media ${device.md} {
    display: grid;
  }
`;

const CopyRight = styled.p`
  font-size: 14px;
  text-align: center;

  a {
    text-decoration: none;
    color: #000;
  }

  @media ${device.md} {
    line-height: 0;
    padding-top: 20px;
  }

  @media ${device.sm} {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyRight>
        <a href={footerCopyRightData.link}>{footerCopyRightData.text}</a>
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;
