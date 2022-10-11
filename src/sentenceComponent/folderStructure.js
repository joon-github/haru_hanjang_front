import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const SentenceFolderContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 10%;
  margin: 5px;
`;

const SentenceContent = ({ data, idx, handleClick, isDocument }) => {
  return (
    <SentenceFolderContainer onClick={() => handleClick(idx)}>
      <h3>{data.title}</h3>
    </SentenceFolderContainer>
  );
};

export default SentenceContent;
