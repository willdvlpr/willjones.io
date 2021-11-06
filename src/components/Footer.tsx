import React from "react";
import styled from "styled-components";

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
`;

const FooterLinks = styled.div`
  display: flex;
  float: left;
  height: 150px;
  width: 444px;
`;

const FooterCopyRight = styled(FooterLinks)`
  float: right;
  font-size: 16px;
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
`;

const FooterLinkRight = styled(FooterLink)`
  font-size: 14px;
  padding-right: 50px;
  width: 100%;
  line-height: 60px;
  text-align: right;

  a {
    text-decoration: none;
    color: #000;
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
