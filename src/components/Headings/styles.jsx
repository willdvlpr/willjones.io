import styled from "styled-components";
import { theme } from "@/utils/theme";
import { device } from "@/utils/device";

const { sm } = device;

const {
  color: { primaryText, secondary },
} = theme;

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
