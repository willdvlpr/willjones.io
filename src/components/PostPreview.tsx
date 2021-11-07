import React from "react";
import styled from "styled-components";

const Preview = styled.div`
  padding: 0;
  position: relative;
  height: 180px;
  width: 800px;
  margin-top: 50px;
  margin-left: calc(50% - 400px);
  border-radius: 25px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  opacity: 0.7;
  background-color: #a7d9d1;
  transition: all 0.3s ease 0s;

  &:hover {
    transform: translateY(0.1rem);
    opacity: 1;
  }

  &:active {
    transform: translateY(-0.4rem);
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

const PreviewType = styled.div`
  position: absolute;
  height: 60px;
  width: 100%;
  text-align: left;
  line-height: 60px;
  font-size: 18px;
  padding-left: 40px;
  color: #fff;
  font-weight: 400;
`;

const PreviewTitle = styled.div`
  position: absolute;
  height: 60px;
  width: 100%;
  margin-top: 60px;
  line-height: 60px;
  font-weight: bold;
  font-size: 20px;
  padding-left: 40px;
`;

const PreviewDate = styled.div`
  position: absolute;
  height: 60px;
  width: 100%;
  margin-top: 120px;
  line-height: 60px;
  padding-left: 40px;
  color: #fff;
  font-weight: 400;
`;

const PostPreview = (): JSX.Element => {
  return (
    <>
      {/* <Preview>
        <a
          href="https://willdvlpr.medium.com/create-a-scrolling-ticker-using-the-hacker-news-rss-feed-in-react-42633320a2b0"
          target="_blank"
        >
          <PreviewType>Article</PreviewType>
          <PreviewTitle>
            Create a Scrolling Ticker using the Hacker News RSS Feed in React
          </PreviewTitle>
          <PreviewDate>August 5 2021</PreviewDate>
        </a>
      </Preview>
      <Preview>
        <a
          href="https://willdvlpr.medium.com/creating-a-ci-pipeline-with-gitlab-b4bd0b68e80c"
          target="_blank"
        >
          <PreviewType>Article</PreviewType>
          <PreviewTitle>Creating a CI Pipeline with GitLab</PreviewTitle>
          <PreviewDate>July 21 2021</PreviewDate>
        </a>
      </Preview>
      <Preview>
        <a
          href="https://willdvlpr.medium.com/containerizing-a-react-node-js-app-using-docker-and-nginx-60b63796d67b"
          target="_blank"
        >
          <PreviewType>Article</PreviewType>
          <PreviewTitle>
            Containerizing a React + Node.js App using Docker (and NGINX)
          </PreviewTitle>
          <PreviewDate>July 7 2021</PreviewDate>
        </a>
      </Preview>
      <Preview>
        <a
          href="https://willdvlpr.medium.com/how-to-use-ibms-carbon-design-system-react-to-create-a-quick-ui-f10b8290f29"
          target="_blank"
        >
          <PreviewType>Article</PreviewType>
          <PreviewTitle>
            How to Use IBM’s Carbon Design System (React) to Create a Quick UI
          </PreviewTitle>
          <PreviewDate>June 10 2021</PreviewDate>
        </a>
      </Preview>
      <Preview>
        <a
          href="https://willdvlpr.medium.com/using-a-makefile-with-your-web-app-2e9e68bf4b53"
          target="_blank"
        >
          <PreviewType>Article</PreviewType>
          <PreviewTitle>Using a Makefile with Your Web App</PreviewTitle>
          <PreviewDate>June 3 2021</PreviewDate>
        </a>
      </Preview>
      <Preview>
        <a
          href="https://willdvlpr.medium.com/the-socioprophet-platform-266cea73b024"
          target="_blank"
        >
          <PreviewType>Article</PreviewType>
          <PreviewTitle>The SocioProphet Platform — Development</PreviewTitle>
          <PreviewDate>June 2 2021</PreviewDate>
        </a>
      </Preview> */}
    </>
  );
};

export default PostPreview;
