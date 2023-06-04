import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/utils/theme";

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.secondary};
  border-radius: 10px;
  width: 100px;
  height: 24px;
  font-size: 14px;
  margin: auto;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.color.primaryText};
`;
