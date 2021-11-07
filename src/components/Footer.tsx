import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  top: 100%;
  width: 100%;
  height: 150px;
  background-color: transparent;
`;

const FooterSection = styled.div`
  position: relative;
  width: 100%;
  height: 150px;

  @media ${device.md} {
    display: grid;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  float: left;
  height: 80px;
  width: 444px;
  justify-content: center;

  @media ${device.md} {
    float: none;
    width: 100%;
  }
`;

const FooterCopyRight = styled(FooterLinks)`
  float: right;
  line-height: 150px;
`;

const FooterLink = styled.p`
  font-size: 24px;
  padding-top: 40px;
  padding-left: 50px;
  height: auto;
  line-height: 50%;
  cursor: pointer;
  &:hover {
    transform: translateY(0.1rem);
    opacity: 1;
  }

  &:active {
    transform: translateY(-0.1rem);
  }

  @media ${device.md} {
    font-size: 20px;
    padding: 12px;
  }

  @media ${device.sm} {
    font-size: 18px;
  }
`;

const FooterLinkRight = styled(FooterLink)`
  font-size: 14px;
  padding-right: 50px;
  width: 100%;
  line-height: 45px;
  text-align: right;

  a {
    text-decoration: none;
    color: #000;
  }

  @media ${device.md} {
    text-align: center;
    padding: 0;
  }

  @media ${device.sm} {
    font-size: 12px;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterLinks>
          <FooterLink>
            <i className="fa fa-twitter"></i>
          </FooterLink>
          <FooterLink>
            <i className="fa fa-linkedin"></i>
          </FooterLink>
          <FooterLink>
            <i className="fa fa-medium"></i>
          </FooterLink>
          <FooterLink>
            <i className="fa fa-youtube"></i>
          </FooterLink>
          <FooterLink>
            <i className="fa fa-github"></i>
          </FooterLink>
          <FooterLink>
            <i className="fa fa-gitlab"></i>
          </FooterLink>
        </FooterLinks>
        <FooterCopyRight>
          <FooterLinkRight>
            <a href="www.willjones.io">
              Copyright © 2021 Will Jones. All rights reserved.
            </a>
          </FooterLinkRight>
        </FooterCopyRight>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
