import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Display from "../components/Display";
import PostPreview from "../components/PostPreview";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 1800px;
`;

const HeadingSection = styled.section`
  width: 600px;
  height: 250px;
  margin-left: calc(50% - 300px);
  padding-top: 125px;
  text-align: center;
`;

const Heading = styled.h1`
  font-weight: 800;
  font-size: 50px;
  letter-spacing: 1.5px;
  color: #000;
`;

const Home = (): JSX.Element => {
  return (
    <>
      <Container>
        <Head>
          <title>Will Jones</title>
        </Head>
        <NavBar />
        <HeadingSection>
          <Heading>Software Engineer.</Heading>
        </HeadingSection>
        <Display />
        <PostPreview />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
