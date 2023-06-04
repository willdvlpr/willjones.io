import React from "react";
import { PreviewItem } from "@/utils/types";
import {
  StyledPreviewItem,
  StyledPreviewLink,
  StyledPreviewItemInfo,
  StyledPreviewItemTagContainer,
  StyledPreviewItemTag,
} from "./styles";

interface PreviewProps {
  previewItems: PreviewItem[];
}

export const Preview = ({ previewItems }: PreviewProps) => {
  return (
    <>
      {previewItems.map(({ id, link, title, type, tags }) => (
        <StyledPreviewItem key={id} color={type}>
          <StyledPreviewLink href={link} target="_blank" rel="noreferrer">
            <StyledPreviewItemInfo>{type}</StyledPreviewItemInfo>
            <StyledPreviewItemInfo>{title}</StyledPreviewItemInfo>
            <StyledPreviewItemTagContainer>
              {tags.map((tag) => {
                return (
                  <StyledPreviewItemTag key={`${id}-${tag}`}>
                    {tag}
                  </StyledPreviewItemTag>
                );
              })}
            </StyledPreviewItemTagContainer>
          </StyledPreviewLink>
        </StyledPreviewItem>
      ))}
    </>
  );
};
