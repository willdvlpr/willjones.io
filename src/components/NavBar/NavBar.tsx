import React from "react";
import { NavItem } from "@/utils/types";
import { getNavItemColor } from "@/utils/helpers";
import { StyledNav, StyledNavItem, StyledNavItemLink } from "./styles";

interface NavBarProps {
  navItems: NavItem[];
}

export const NavBar = ({ navItems }: NavBarProps) => {
  return (
    <StyledNav>
      {navItems.map(({ id, displayName, link }, index) => {
        return (
          <StyledNavItem key={id}>
            <StyledNavItemLink
              color={getNavItemColor(index)}
              href={link}
              target="_blank"
              rel="external"
            >
              {displayName}
            </StyledNavItemLink>
          </StyledNavItem>
        );
      })}
    </StyledNav>
  );
};
