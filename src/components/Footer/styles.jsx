import styled from "styled-components";
import { theme } from "@/utils/theme";
import { device } from "../../utils/device";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  top: 100%;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const StyledCopyrightNotification = styled.p`
  margin-bottom: 20px;
  font-size: 10px;
  color: ${theme.color.primaryText};
`;
