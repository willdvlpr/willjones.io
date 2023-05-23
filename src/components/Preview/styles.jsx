import styled from "styled-components";
import { device } from "../../utils/device";

export const ItemContainer = styled.div`
  padding: 0;
  position: relative;
  height: 180px;
  width: 800px;
  margin-top: 50px;
  margin-left: calc(50% - 400px);
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  opacity: 0.9;
  background-color: ${(props) =>
    props.color === "Article" ? "#a7d9d1" : "#a7c8d9"};
  transition: all 0.3s ease 0s;

  &:hover {
    transform: translateY(0.1rem);
    opacity: 1;
  }

  &:active {
    transform: translateY(-0.4rem);
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  @media ${device.md} {
    width: 450px;
    margin-left: calc(50% - 220px);
  }

  @media ${device.sm} {
    width: 280px;
    height: 190px;
    margin-left: calc(50% - 140px);
  }
`;

export const PreviewType = styled.div`
  position: absolute;
  height: 60px;
  width: 100%;
  line-height: 60px;
  font-size: 18px;
  padding: 0 40px 0 40px;
  color: #fff;
  font-weight: 400;

  @media ${device.md} {
    font-size: 14px;
  }

  @media ${device.sm} {
    font-size: 12px;
    padding-left: 25px;
  }
`;

export const PreviewTitle = styled.div`
  position: absolute;
  height: 60px;
  width: 100%;
  margin-top: 60px;
  line-height: 60px;
  font-weight: bold;
  font-size: 20px;
  padding: 0 40px 0 40px;

  @media ${device.md} {
    font-size: 18px;
    line-height: 40px;
    padding-right: 40px;
    margin-top: 50px;
  }

  @media ${device.sm} {
    font-size: 14px;
    line-height: 25px;
    padding-left: 25px;
  }
`;

export const PreviewDate = styled.div`
  position: absolute;
  height: 60px;
  width: 100%;
  margin-top: 120px;
  line-height: 60px;
  padding-left: 40px;
  color: #000;
  font-weight: 400;
  font-size: 16px;

  @media ${device.md} {
    font-size: 14px;
  }

  @media ${device.sm} {
    font-size: 12px;
    margin-top: 125px;
    padding-left: 25px;
  }
`;
