import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { device } from "../utils/device";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 10000;
  background-color: transparent;
`;

const NavContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
`;

const NavItem = styled.div`
  position: relative;
  float: left;
  padding: 10px;
  margin-left: 150px;
  width: 190px;
  height: 100px;

  @media ${device.md} {
    width: 170px;
    margin-left: 20px;
  }

  @media ${device.sm} {
    width: 120px;
    margin-left: 10px;
  }
`;

const RightNavItem = styled(NavItem)`
  float: right;
  margin-right: 150px;

  @media ${device.md} {
    margin-right: 20px;
  }

  @media ${device.sm} {
    margin-right: 10px;
  }
`;

const Title = styled.h1`
  position: relative;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #000;
  z-index: 1;

  @media ${device.md} {
    font-size: 24px;
  }

  @media ${device.sm} {
    padding-top: 12px;
    font-size: 14px;
  }
`;

const NavBar = (): JSX.Element => {
  return (
    <Nav>
      <NavContainer>
        <NavItem>
          <Title>Will Jones</Title>
        </NavItem>
        <RightNavItem>
          <Button label="contact" />
        </RightNavItem>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
