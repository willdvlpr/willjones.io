import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  position: absolute;
  left: calc(50% - 65px);
  top: calc(50% - 20px);
  height: 40px;
  width: 130px;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  outline: none;
  border: none;
  border-radius: 45px;
  color: #fff;
  cursor: pointer;
  // background-color: #c8c5db;
  background-color: #88dbce;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: #e8e7ef;
    color: #333;
    box-shadow: 0px 15px 20px #e8e7ef;
    transform: translateY(-1px);
  }

  &:active {
    background-color: #fff;
    color: #333;
    transform: translateY(0.1rem);
  }
`;

interface Props {
  label: string;
}

const Button = ({ label }: Props): JSX.Element => {
  return <ButtonContainer>{label}</ButtonContainer>;
};

export default Button;
