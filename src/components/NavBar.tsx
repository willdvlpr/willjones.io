import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
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
`;

const RightNavItem = styled(NavItem)`
  float: right;
  margin-right: 150px;
`;

const Title = styled.h1`
  position: relative;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #000;
  z-index: 1;
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
