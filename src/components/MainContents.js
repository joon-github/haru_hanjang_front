import React from "react";
import MainContent from "./MainContent";
import data from "../navData";
import styled from "styled-components";

const MainContentsContainer = styled.div`
  position: absolute;
  bottom: 10%;
  display: grid;
  width: 80%;
  height: 50%;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
`;
const MainContents = ({ handleClick }) => {
  return (
    <MainContentsContainer>
      {data.map((data, idx) => {
        return (
          <MainContent
            key={data.id}
            data={data}
            idx={idx}
            handleClick={handleClick}
          ></MainContent>
        );
      })}
    </MainContentsContainer>
  );
};

export default MainContents;
