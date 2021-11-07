import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  top: 100%;
  width: 100%;
  height: 150px;

  background-color: skyblue;
`;

// const FooterLeft = styled.div`
//   display: flex;
//   float: left;
//   height: 150px;
//   width: 50%;
//   background-color: skyblue;

//   @media ${device.md} {
//     float: none;
//     width: 100%;
//   }

//   @media ${device.sm} {
//     float: none;
//     width: 100%;
//   }
// `;

// const FooterRight = styled.div`
//   float: right;
//   height: 150px;
//   width: 50%;
//   background-color: pink;

//   @media ${device.md} {
//     float: none;
//     width: 100%;
//   }
// `;

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
      {/* <FooterLeft> */}
      {/* <FooterLink>
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
        </FooterLink> */}
      {/* </FooterLeft> */}
      {/* <FooterRight> */}
      {/* <FooterLinkRight>
          <a href="www.willjones.io">
            Copyright © 2021 Will Jones. All rights reserved.
          </a>
        </FooterLinkRight> */}
      {/* </FooterRight> */}
    </FooterContainer>
  );
};

export default Footer;
