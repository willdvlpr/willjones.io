import React from "react";
import { socialData } from "../../data";
import { Nav, NavItem, Title } from "./styles";

export const NavBar = () => {
  return (
    <Nav>
      {socialData.map(({ id, displayName, link }) => {
        return (
          <NavItem key={id}>
            <Title>
              <a href={link} target="_blank" rel="external">
                {displayName}
              </a>
            </Title>
          </NavItem>
        );
      })}
    </Nav>
  );
};
