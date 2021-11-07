import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Display from "../components/Display";
import PostPreview from "../components/PostPreview";
import Footer from "../components/Footer";
import styled from "styled-components";
import { device } from "../utils/device";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 1800px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-top: 150px;
  font-weight: 800;
  font-size: 50px;
  letter-spacing: 1.5px;
  color: #000;

  @media ${device.md} {
    font-size: 36px;
  }

  @media ${device.sm} {
    margin-top: 130px;
    font-size: 22px;
  }
`;

const Home = (): JSX.Element => {
  return (
    <>
      <Container>
        <Head>
          <title>Will Jones</title>
        </Head>
        <NavBar />
        <Heading>Software Engineer.</Heading>
        <Display />
        <PostPreview />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
