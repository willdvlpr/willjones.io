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
  height: 850px;
  width: 50%;
  padding-top: 100px;
  overflow: scroll;

  @media ${md} {
    width: 100%;
  }
`;

export const StyledHeadingContainer = styled.div`
  text-align: center;

  @media ${sm} {
    margin-top: 30px;
  }
`;

export const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  padding-left: 40px;
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 5px;
  color: ${primaryText};

  @media ${lg} {
    font-size: 26px;
    padding: 0;
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
  text-align: left;
  margin-top: 60px;
  padding-left: 50px;
  font-size: 14px;

  color: ${primaryText};
  line-height: 35px;

  @media ${lg} {
    text-align: center;
    padding-right: 50px;
    font-size: 12px;
  }
`;

export const StyledPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-left: 50px;
  padding-right: 50px;

  @media ${md} {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media ${sm} {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
