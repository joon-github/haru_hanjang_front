import React from "react";
import styled from "styled-components";
import SentenceContent from "../sentenceComponent/folderStructure";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { sentenceDataClick } from "../actions/action";
const SentenceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  /* background-color: rgb(224, 236, 255); */
`;
const SentenceContents = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  height: 85%;
  width: 90%;
  background-color: rgb(176, 207, 255);
  margin-bottom: 5%;
`;
const SentenceContentLink = styled(Link)`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 10%;
  margin: 5px;
`;

const My_Sentence = ({ setPathName }) => {
  const dispatch = useDispatch();
  const sentenceData = useSelector((state) => state.sentenceData);
  const PrevioussentenceData = useSelector((state) => state.previousState);
  const handleClick = (idx) => {
    dispatch(sentenceDataClick(idx));
  };
  setPathName(window.location.pathname);
  return (
    <SentenceContainer>
      <SentenceContents>
        {sentenceData.map((data, idx) => {
          return data.type === "folder" ? (
            <SentenceContent
              key={data.id}
              data={data}
              idx={idx}
              handleClick={handleClick}
              isDocument={false}
            ></SentenceContent>
          ) : (
            <SentenceContentLink
              key={data.id}
              onClick={() => console.log("A")}
              to={`/my_sentence/${data.id}`}
            >
              <h4>{data.title}</h4>
            </SentenceContentLink>
          );
        })}
      </SentenceContents>
    </SentenceContainer>
  );
};

export default My_Sentence;
