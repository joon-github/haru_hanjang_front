import React from "react";
import styled from "styled-components";
import backIcon from "../icons/left.png";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { previousFolder } from "../actions/action";
const HeaderTag = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  height: 50px;
  background-color: rgb(176, 207, 255);
  button {
    background-color: white;
    border: 0;
  }
  h3 {
    margin-left: 5%;
  }
  img {
    width: 25px;
  }
  .folderRoute {
    display: flex;
    width: 40vh;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 20px;
      margin: 5px;
      background-color: violet;
    }
  }
`;
const Header = ({ data }) => {
  const navigate = useNavigate();
  console.log(data);

  const dispatch = useDispatch();
  const creentTapIdx = useSelector((state) => state.creentTap[0]);
  const title = useSelector((state) => state.data[creentTapIdx].name);
  const folderRoute = useSelector((state) => state.folderTitle);
  console.log("헤더 리랜더링");
  return (
    <HeaderTag>
      <button
        onClick={() => {
          navigate("/my_sentence");
          dispatch(previousFolder());
        }}
      >
        <img src={backIcon} alt="뒤로가기 아이콘" />
      </button>
      <h3>{title}</h3>
      <div className="folderRoute">
        {folderRoute.map((title, idx) => {
          return <span key={idx}>{title}</span>;
        })}
      </div>
    </HeaderTag>
  );
};

export default Header;
