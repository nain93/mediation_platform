import React from "react";
import styled from "styled-components";
import topLogo from "../img/top_logo.png";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 3% 5%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`;

const Title = styled(Link)`
  display: inline-flex;
  align-items: center;
`;

const TitleText = styled.h1`
  color: white;
  font-size: 40px;
  margin: 0 5%;
  font-weight: 500;
`;

const NavItemList = styled.div`
  display: inline-flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin: 0 20px;
  color: white;
  font-size: 16px;
`;

function Nav() {
  return (
    <Container>
      <Title to="/">
        <img src={topLogo} alt="topLogo" width={80} />
        <TitleText>ZerOne</TitleText>
      </Title>
      <nav>
        <NavItemList>
          <NavItem to="/play">PLAY</NavItem>
          <NavItem to="/project">PROJECT</NavItem>
          <NavItem to="/story">STORY</NavItem>
          <NavItem to="/lounge">LOUNGE</NavItem>
          <NavItem to="/wallet">WALLET</NavItem>
          <NavItem to="/">
            <FiSearch size={30} />
          </NavItem>
        </NavItemList>
      </nav>
    </Container>
  );
}

export default Nav;
