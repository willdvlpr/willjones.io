import React from "react";
import { postData } from "../../data/posts";
import {
  StyledPreviewItem,
  StyledPreviewItemInfo,
  StyledPreviewItemTagContainer,
  StyledPreviewItemTag,
} from "./styles";

export const Preview = () => {
  return (
    <>
      {postData.map(({ id, link, title, type, tags }) => (
        <StyledPreviewItem key={id} color={type}>
          <a href={link} target="_blank" rel="noreferrer">
            <StyledPreviewItemInfo>{type}</StyledPreviewItemInfo>
            <StyledPreviewItemInfo>{title}</StyledPreviewItemInfo>
            <StyledPreviewItemTagContainer>
              <StyledPreviewItemTag>{tags}</StyledPreviewItemTag>
            </StyledPreviewItemTagContainer>
          </a>
        </StyledPreviewItem>
      ))}
    </>
  );
};
