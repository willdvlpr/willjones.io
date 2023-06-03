import styled from "styled-components";
import { device } from "../../utils/device";

const { md, sm, mobileLg } = device;

export const Nav = styled.nav`
  display: flex;
  height: 100px;
  z-index: 10000;
  align-items: center;

  @media ${md} {
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;
  }
`;

export const NavItem = styled.div`
  position: relative;
  margin-left: 50px;

  @media ${md} {
    margin-left: 0;
  }
`;

export const Title = styled.h3`
  position: relative;
  font-size: 16px;
  z-index: 1;

  a {
    text-decoration: none;
    color: ${(props) => props.color};
  }

  @media ${md} {
    font-size: 14px;
  }

  @media ${sm} {
    font-size: 12px;
  }

  @media ${mobileLg} {
    font-size: 10px;
  }
`;
