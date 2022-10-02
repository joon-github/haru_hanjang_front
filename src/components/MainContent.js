import React from "react";
import { Link } from "react-router-dom";
import { clickToMenu } from "../actions/action";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const ContentTitle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  border-radius: 30%;
  margin: 10px;
  background-color: rgb(176, 207, 255);
`;
const MainContent = ({ data, idx }) => {
  const state = useSelector((state) => state.onlyMainView[0].isMain);
  console.log(state);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clickToMenu());
  };
  return (
    <ContentTitle onClick={handleClick} to={data.url}>
      <h2>{data.name}</h2>
    </ContentTitle>
  );
};

export default MainContent;
