import styled from "styled-components";
import { theme } from "@/utils/theme";
import { device } from "@/utils/device";

const { lg, md, sm } = device;

const {
  color: { primaryText, secondary },
} = theme;

export const StyledSectionContainer = styled.div`
  display: grid;
`;

export const StyledSection = styled.div`
  height: auto;
  width: 100%;
  margin-top: 100px;
  padding-top: 60px;
`;

export const StyledHeadingContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 5px;
  color: ${primaryText};

  @media ${sm} {
    font-size: 24px;
  }
`;

export const StyledSubHeading = styled(StyledHeading)`
  margin-top: 60px;
  font-size: 38px;
  padding-bottom: 60px;

  @media ${sm} {
    font-size: 24px;
    margin-top: 30px;
  }
`;

export const StyledSpan = styled.span`
  color: ${secondary};
`;

export const StyledAbout = styled.div`
  margin-top: 60px;
  padding: 0 50px 0 50px;
  font-size: 14px;

  color: ${primaryText};
  line-height: 35px;
`;

export const StyledPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 100px;
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
