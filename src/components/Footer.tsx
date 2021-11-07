import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  top: 100%;
  width: 100%;
  height: 150px;

  @media ${device.md} {
    display: grid;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  float: left;
  height: 150px;
  width: 50%;
  justify-content: center;

  @media ${device.md} {
    float: none;
    width: 100%;
    height: 85px;
  }

  @media ${device.sm} {
    height: 60px;
  }
`;

const FooterRight = styled.div`
  float: right;
  height: 150px;
  width: 50%;

  @media ${device.md} {
    float: none;
    width: 100%;
    height: 100px;
  }
`;

const SocialLink = styled.p`
  height: 68px;
  padding-top: 15px;

  i {
    padding: 20px;
    font-size: 24px;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(0.1rem);
    opacity: 1;
  }

  &:active {
    transform: translateY(-0.1rem);
  }

  @media ${device.md} {
    padding: 0 6px 0 6px;
  }

  @media ${device.sm} {
    i {
      padding: 0 3px 0 3px;
      font-size: 14px;
    }
  }
`;

const CopyRight = styled.p`
  font-size: 14px;
  line-height: 45px;
  text-align: center;
  padding-top: 28px;

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

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterLeft>
        <SocialLink>
          <i className="fa fa-twitter"></i>
        </SocialLink>
        <SocialLink>
          <i className="fa fa-linkedin"></i>
        </SocialLink>
        <SocialLink>
          <i className="fa fa-medium"></i>
        </SocialLink>
        <SocialLink>
          <i className="fa fa-youtube"></i>
        </SocialLink>
        <SocialLink>
          <i className="fa fa-github"></i>
        </SocialLink>
        <SocialLink>
          <i className="fa fa-gitlab"></i>
        </SocialLink>
      </FooterLeft>
      <FooterRight>
        <CopyRight>
          <a href="https://www.willjones.io">
            Copyright © 2021 Will Jones. All rights reserved.
          </a>
        </CopyRight>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
