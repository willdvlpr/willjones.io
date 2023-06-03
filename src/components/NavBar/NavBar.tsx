import React from "react";
import { socialData } from "@/data";
import { getNavItemColor } from "@/utils/helpers";
import { Nav, NavItem, Title } from "./styles";

export const NavBar = () => {
  return (
    <Nav>
      {socialData.map(({ id, displayName, link }, index) => {
        return (
          <NavItem key={id}>
            <Title color={getNavItemColor(index)}>
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
