import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50vh;
  justify-content: space-around;
`;

const TitleText = styled.div`
  font-size: 80px;
  color: #29498e;
  font-weight: 800;
  display: flex;
  @media screen and (max-width: 767px) {
    font-size: 40px;
  }
`;

const TitleDesc = styled.div`
  text-align: center;
  color: #29498e;
`;

const TitleBtn = styled.button`
  display: block;
  background-color: #0e9fbe;
  border-radius: 25px;
  color: white;
  width: 180px;
  height: 45px;
  font-weight: 600;
`;

function MainTitle() {
  return (
    <Container>
      <TitleText>
        <p>
          NEVER STOP
          <br /> EXPLORING THE
          <br /> IDEA.
        </p>
      </TitleText>

      <TitleDesc>
        <span>
          For Your
          <br /> Business Blockchain System
        </span>
      </TitleDesc>
      <TitleBtn>READ MORE</TitleBtn>
    </Container>
  );
}

export default MainTitle;
