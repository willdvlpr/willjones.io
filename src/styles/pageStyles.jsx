import styled from "styled-components";
import { theme } from "@/utils/theme";
import { device } from "@/utils/device";

const { md, sm } = device;

export const StyledHomeContainer = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
`;

export const StyledHomeSection = styled.section`
  display: grid;
  height: auto;
  width: 100%;
  margin-top: 100px;
  padding-top: 60px;
`;

export const StyledPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 60px;
  padding-left: 200px;
  padding-right: 200px;

  @media ${md} {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media ${sm} {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const StyledAboutContainer = styled.div`
  text-align: center;
  color: ${theme.color.primaryText};
  padding: 100px;
  line-height: 35px;
  font-size: 14px;

  @media ${sm} {
    padding: 50px;
    font-size: 12px;
  }
`;

export const StyledReturnContainer = styled.div`
  margin-top: 60px;
`;

export const StyledAboutHeading = styled.h1`
  color: ${theme.color.secondary};
  font-size: 24px;
  margin-bottom: 60px;
`;
