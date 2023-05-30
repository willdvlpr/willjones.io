import styled from "styled-components";
import { device } from "../../utils/device";

export const Nav = styled.nav`
  width: calc(100% - 100px);
  height: 50px;
  margin-left: 50px;
  z-index: 10000;
  border-bottom: 1px solid #eee;

  @media ${device.md} {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;
    margin-top: 10px;
  }

  @media ${device.sm} {
    margin: 15px 0 0 0;
    width: 100%;
    padding: 10px;
    border: none;
  }
`;

export const NavItem = styled.div`
  position: relative;
  float: left;
  margin-left: 60px;

  @media ${device.md} {
    margin-left: 0;
  }

  @media ${device.sm} {
    margin-left: 0;
    text-align: center;
  }
`;

export const Title = styled.h3`
  position: relative;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  z-index: 1;

  a {
    text-decoration: none;
    color: #000;
  }

  @media ${device.md} {
    font-size: 12px;
  }

  @media ${device.sm} {
    font-size: 10px;
  }
`;
