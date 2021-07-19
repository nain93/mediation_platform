import React from "react";
import styled from "styled-components";
import MainTitle from "./MainTitle";
import SwiperSection from "./SwiperSection";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 0 8%;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <Container>
      <MainTitle />
      <SwiperSection />
    </Container>
  );
}

export default Home;
