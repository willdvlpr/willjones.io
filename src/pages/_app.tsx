import React from "react";
import "../styles/global.css";

interface Props {
  Component: any;
  pageProps: any;
}

const App = ({ Component, pageProps }: Props) => {
  return <Component {...pageProps} />;
};

export default App;
