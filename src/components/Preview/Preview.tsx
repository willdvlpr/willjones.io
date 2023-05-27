import React from "react";
import { postData } from "../../data/posts";
import {
  ItemContainer,
  PreviewType,
  PreviewTitle,
  PreviewDate,
} from "./styles";

export const Preview = () => {
  return (
    <>
      {postData.map(
        ({
          id,
          link,
          previewMeta: { previewType, previewDate },
          previewTitle,
        }) => (
          <ItemContainer key={id} color={previewType}>
            <a href={link} target="_blank" rel="noreferrer">
              <PreviewType>{previewType}</PreviewType>
              <PreviewTitle>{previewTitle}</PreviewTitle>
              <PreviewDate>{previewDate}</PreviewDate>
            </a>
          </ItemContainer>
        )
      )}
    </>
  );
};
