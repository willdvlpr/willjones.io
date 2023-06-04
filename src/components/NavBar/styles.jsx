import styled from "styled-components";
import { theme } from "@/utils/theme";
import { device } from "../../utils/device";

const { md, sm, mobileLg } = device;

export const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  height: 100px;
  width: 100%;
  z-index: 10000;
  align-items: center;
  background-color: ${theme.color.primary};
  border-bottom: 1px solid ${theme.color.horizontalBreakLine};

  @media ${md} {
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;
  }
`;

export const StyledNavItem = styled.h3`
  margin-left: 50px;
  z-index: 1;
  font-size: 16px;

  @media ${md} {
    margin-left: 0;
    font-size: 14px;
  }

  @media ${sm} {
    font-size: 12px;
  }

  @media ${mobileLg} {
    font-size: 10px;
  }
`;

export const StyledNavItemLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.color};
`;
