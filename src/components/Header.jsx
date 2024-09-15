import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";



const Header = () => {
  return (
    <MainHeader className="shadow sticky z-50 top-0">
      <NavLink to="/" className="text-white">
      <span    >all फिट</span>
     
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;

 
`;

export default Header;
