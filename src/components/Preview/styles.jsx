import styled from "styled-components";
import { device } from "@/utils/device";
import { theme } from "@/utils/theme";

const { lg, md, sm, mobileMd } = device;

export const StyledPreviewItem = styled.div`
  display: grid;
  align-items: center;
  height: 120px;
  width: 450px;
  margin-top: 60px;
  margin-left: calc(50% - 225px);
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${theme.color.secondary};

  a {
    text-decoration: none;
    color: #fff;
  }

  @media ${lg} {
    height: 106px;
    width: 400px;
    margin-left: calc(50% - 200px);
  }

  @media ${md} {
    height: 120px;
    width: 450px;
    margin-left: calc(50% - 225px);
  }

  @media ${sm} {
    height: 90px;
    width: 338px;
    margin-left: calc(50% - 169px);
  }

  @media ${mobileMd} {
    width: 280px;
    margin-left: calc(50% - 140px);
  }
`;

export const StyledPreviewItemInfo = styled.div`
  display: flex;
  height: 35px;
  font-size: 12px;
  align-items: center;
  padding-left: 30px;

  @media ${lg} {
    height: 30px;
    font-size: 10px;
  }

  @media ${sm} {
    height: 22px;
    font-size: 8px;
  }
`;

export const StyledPreviewItemTagContainer = styled(StyledPreviewItemInfo)`
  padding-left: 28px;
`;

export const StyledPreviewItemTag = styled.div`
  border: 1px solid ${theme.color.secondary};
  border-radius: 10px;
  padding: 3px 10px 3px 10px;
  font-size: 10px;

  @media ${lg} {
    font-size: 8px;
  }

  @media ${sm} {
    padding: 1px 8px 1px 8px;
  }
`;
