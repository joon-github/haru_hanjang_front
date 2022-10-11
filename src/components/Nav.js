import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavContain = styled.div`
  img {
    width: 20px;
    margin: 5px;
  }
  &.submenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 2px 0 2px;
  }
  &.focused {
    background-color: rgb(176, 207, 255);
  }
`;
const Nav = ({ data, idx, className, onClickHandler }) => {
  return (
    <Link to={data.url}>
      <NavContain className={className} onClick={() => onClickHandler(idx)}>
        <img src={data.icon}></img>
        <div>{data.name}</div>
      </NavContain>
    </Link>
  );
};

export default Nav;
