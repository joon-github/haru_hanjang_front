import React from "react";
import styled from "styled-components";
import backIcon from "../icons/left.png";
import { useParams } from "react-router";
const Header = () => {
  let { id } = useParams();
  console.log(id);
  const HeaderTag = styled.header`
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
  return (
    <HeaderTag>
      <button>
        <img src={backIcon}></img>
      </button>
      <h3></h3>
    </HeaderTag>
  );
};

export default Header;
