import React from "react";
import PreviewItem from "./PreviewItem";
import { postData } from "../data/postData";

const PostPreview = (): JSX.Element => {
  return (
    <>
      {postData.map((post) => (
        <PreviewItem
          key={post.id}
          href={post.link}
          type={post.previewMeta.previewType}
          title={post.previewTitle}
          date={post.previewMeta.previewDate}
        />
      ))}
    </>
  );
};

export default PostPreview;
