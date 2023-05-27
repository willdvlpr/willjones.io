import styled from "styled-components";
import { device } from "../utils/device";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 2300px;
`;

export const HeadingContainer = styled.div`
  margin-top: 60px;
  text-align: center;
  color: #000;
`;

export const Heading = styled.h1`
  font-size: 50px;
  letter-spacing: 1.5px;

  @media ${device.md} {
    font-size: 36px;
  }

  @media ${device.sm} {
    font-size: 22px;
  }
`;

export const SubHeading = styled(Heading)`
  font-size: 30px;
`;
