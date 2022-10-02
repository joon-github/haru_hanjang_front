import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import navData from "../navData";
const NavTag = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;
const Navs = () => {
  const [currentTab, setCurrentTab] = useState("");
  const onClickHandler = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <NavTag>
      {navData.map((data, idx) => {
        return (
          <Nav
            key={data.id}
            data={data}
            idx={idx}
            className={idx === currentTab ? "submenu focused" : "submenu"}
            onClickHandler={onClickHandler}
          ></Nav>
        );
      })}
    </NavTag>
  );
};

export default Navs;
