import React from "react";
import styled from "styled-components";
import backIcon from "../icons/left.png";
import { useParams, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { clickToMenu } from "../actions/action";
const HeaderTag = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  height: 50px;
  button {
    background-color: white;
    border: 0;
  }

  img {
    width: 25px;
  }
`;
const Header = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(window.location.href);

  return (
    <HeaderTag>
      <button
        onClick={() => {
          dispatch(clickToMenu());
          navigate("/");
        }}
      >
        <img src={backIcon}></img>
      </button>
      <h3></h3>
    </HeaderTag>
  );
};

export default Header;
