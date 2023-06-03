import styled from "styled-components";
import { theme } from "@/utils/theme";
import { device } from "@/utils/device";

const { lg, md, sm } = device;

const {
  color: { primaryText, secondary },
} = theme;

export const StyledSectionContainer = styled.div`
  display: flex;
  @media ${md} {
    display: grid;
  }
`;

export const StyledSection = styled.div`
  height: auto;
  width: 50%;

  @media ${md} {
    width: 100%;
  }

  // border: 1px solid red;
`;

export const StyledHeadingContainer = styled.div`
  margin-top: 70px;
  text-align: center;

  @media ${sm} {
    margin-top: 30px;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 5px;
  color: ${primaryText};

  @media ${lg} {
    font-size: 26px;
  }

  @media ${sm} {
    font-size: 24px;
  }
`;

export const StyledSubHeading = styled(StyledHeading)`
  margin-top: 60px;
  font-size: 38px;

  @media ${lg} {
    font-size: 32px;
  }

  @media ${sm} {
    font-size: 24px;
    margin-top: 30px;
  }
`;

export const StyledSpan = styled.span`
  color: ${secondary};
`;

export const StyledAbout = styled.div`
  margin-top: 20px;
  padding: 20px;
  font-size: 14px;
  color: ${primaryText};
  line-height: 35px;

  @media ${lg} {
    font-size: 12px;
  }
`;
