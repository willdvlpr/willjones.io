import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/global.css";

interface Props {
  Component: any;
  pageProps: any;
}

const App = ({ Component, pageProps }: Props) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
