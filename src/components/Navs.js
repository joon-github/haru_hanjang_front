import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import navData from "../navData";
import { creentTap } from "../actions/action";
import { useSelector, useDispatch } from "react-redux";
const NavTag = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;
const Navs = () => {
  const creentTapidx = useSelector((state) => state.creentTap[0]);
  const dispatch = useDispatch();
  const onClickHandler = (idx) => {
    dispatch(creentTap(idx));
  };
  return (
    <NavTag>
      {navData.map((data, idx) => {
        return (
          <Nav
            key={data.id}
            data={data}
            idx={idx}
            className={idx === creentTapidx ? "submenu focused" : "submenu"}
            onClickHandler={onClickHandler}
          ></Nav>
        );
      })}
    </NavTag>
  );
};

export default Navs;
