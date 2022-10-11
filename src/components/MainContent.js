import React from "react";
import { Link } from "react-router-dom";
import { creentTap } from "../actions/action";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const ContentTitle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: 400px;
  height: auto;
  border-radius: 30px;
  margin: 10px;
  background-color: rgb(176, 207, 255);
`;
const MainContent = ({ data, idx }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(creentTap(idx));
  };
  return (
    <ContentTitle onClick={() => handleClick(idx)} to={data.url}>
      <h2>{data.name}</h2>
    </ContentTitle>
  );
};

export default MainContent;
