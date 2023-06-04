import styled from "styled-components";
import { device } from "@/utils/device";
import { theme } from "@/utils/theme";

const { lg, md, sm, mobileMd } = device;

export const StyledPreviewItem = styled.div`
  display: grid;
  align-items: center;
  height: 130px;
  width: auto;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${theme.color.secondary};

  @media ${lg} {
    height: 110px;
  }

  @media ${sm} {
    height: 90px;
  }
`;

export const StyledPreviewLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const StyledPreviewItemInfo = styled.div`
  display: flex;
  height: 35px;
  font-size: 12px;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;

  @media ${lg} {
    font-size: 10px;
    height: 30px;
  }

  @media ${sm} {
    font-size: 8px;
    height: 24px;
  }
`;

export const StyledPreviewItemTagContainer = styled(StyledPreviewItemInfo)`
  float: right;
`;

export const StyledPreviewItemTag = styled.div`
  margin-right: 10px;
  border: 1px solid ${theme.color.secondary};
  border-radius: 10px;
  padding: 3px 10px 3px 10px;
  font-size: 8px;
`;
