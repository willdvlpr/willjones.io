import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/global.css";

interface AppProps {
  Component: any;
  pageProps: any;
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
