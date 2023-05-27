type PostData = {
  id: number;
  link: string;
  previewMeta: { previewType: string; previewDate: string };
  previewTitle: string;
};

type Posts = PostData[];

export const postData: Posts = [
  {
    id: 1,
    link: "https://github.com/willdvlpr/react-webpack-starter",
    previewMeta: {
      previewType: "Open Source Code",
      previewDate: "Last Commit, Nov 9 2021",
    },
    previewTitle: "react-webpack-starter | supports TypeScript and SASS",
  },
  {
    id: 2,
    link: "https://willdvlpr.medium.com/create-a-scrolling-ticker-using-the-hacker-news-rss-feed-in-react-42633320a2b0",
    previewMeta: {
      previewType: "Article",
      previewDate: "August 5 2021",
    },
    previewTitle:
      "Create a Scrolling Ticker using the Hacker News RSS Feed in React",
  },
  {
    id: 3,
    link: "https://willdvlpr.medium.com/creating-a-ci-pipeline-with-gitlab-b4bd0b68e80c",
    previewMeta: {
      previewType: "Article",
      previewDate: "July 21 2021",
    },
    previewTitle: "Creating a CI Pipeline with GitLab",
  },
  {
    id: 4,
    link: "https://willdvlpr.medium.com/containerizing-a-react-node-js-app-using-docker-and-nginx-60b63796d67b",
    previewMeta: {
      previewType: "Article",
      previewDate: "July 7 2021",
    },
    previewTitle:
      "Containerizing a React + Node.js App using Docker (and NGINX)",
  },
  {
    id: 5,
    link: "https://willdvlpr.medium.com/how-to-use-ibms-carbon-design-system-react-to-create-a-quick-ui-f10b8290f29",
    previewMeta: {
      previewType: "Article",
      previewDate: "June 10 2021",
    },
    previewTitle: "How to Use IBM’s Carbon Design System to Create a Quick UI",
  },
  {
    id: 6,
    link: "https://willdvlpr.medium.com/using-a-makefile-with-your-web-app-2e9e68bf4b53",
    previewMeta: {
      previewType: "Article",
      previewDate: "June 3 2021",
    },
    previewTitle: "Using a Makefile with Your Web App",
  },
  {
    id: 7,
    link: "https://willdvlpr.medium.com/the-socioprophet-platform-266cea73b024",
    previewMeta: {
      previewType: "Article",
      previewDate: "June 2 2021",
    },
    previewTitle: "The SocioProphet Platform — Development",
  },
  {
    id: 8,
    link: "https://github.com/SocioProphet",
    previewMeta: {
      previewType: "Startup Project",
      previewDate: "October 1 2020",
    },
    previewTitle: "Open Collaborative Platform - www.socioprophet.com",
  },
];
