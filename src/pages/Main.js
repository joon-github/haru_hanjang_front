import React from "react";
import MainContents from "../components/MainContents";
import styled from "styled-components";

const MianContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  background-color: rgb(224, 236, 255);
  img {
    margin-top: 50px;
    height: 200px;
  }
`;
const Main = () => {
  return (
    <MianContainer>
      <img src="https://cdn.imweb.me/thumbnail/20210120/0e743178b3f9c.jpg" />
      <MainContents></MainContents>
    </MianContainer>
  );
};

export default Main;
