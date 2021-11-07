export const footerSocialData: {
  id: number;
  link: string;
  icon: string;
}[] = [
  {
    id: 1,
    link: "https://twitter.com/willdvlpr",
    icon: "fa fa-twitter",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/william-jones-3839b5133/",
    icon: "fa fa-linkedin",
  },
  {
    id: 3,
    link: "https://willdvlpr.medium.com/",
    icon: "fa fa-medium",
  },
  {
    id: 4,
    link: "https://www.youtube.com/channel/UCSFp5DQrZemnjP5p8XYg7JA",
    icon: "fa fa-youtube",
  },
  {
    id: 5,
    link: "https://github.com/willdvlpr",
    icon: "fa fa-github",
  },
  {
    id: 6,
    link: "https://gitlab.com/willjonestech",
    icon: "fa fa-gitlab",
  },
];

export const footerCopyRightData: {
  link?: string;
  text: string;
} = {
  link: "https://www.willjones.io",
  text: `Copyright © ${new Date().getFullYear()} Will Jones. All rights reserved.`,
};
