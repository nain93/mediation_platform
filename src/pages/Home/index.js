import React from "react";
import styled from "styled-components";
import backImg from "../../img/background.png";
import Section1 from "./section1";
import Section2 from "./section2";

const Container = styled.div`
  height: 500vh;
`;

const BackImg = styled.div`
  background-image: url(${backImg});
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -999;
`;

function Landing() {
  return (
    <Container>
      <BackImg />
      <Section1 />
      <Section2 />
    </Container>
  );
}

export default Landing;
