import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const SentenceContentContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  span {
    background-color: aqua;
  }
`;
const SentenceContent = ({ data }) => {
  let { id } = useParams();
  console.log(id);
  const sentenceContent = useRef(null);
  const [contentText, setContentText] = useState(data[id - 1].content);
  const testFuction = () => {
    const textSelect = [
      document.getSelection().focusOffset,
      document.getSelection().anchorOffset,
    ].sort(function (a, b) {
      return a - b;
    });
    const a = contentText.slice(0, textSelect[0]);
    const b =
      "<span>" + contentText.slice(textSelect[0], textSelect[1]) + "</span>";
    const c = contentText.slice(textSelect[1], contentText.length);
    setContentText(a + b + c);
    console.log(contentText);
  };

  return (
    <SentenceContentContainer>
      <button onClick={testFuction}>테스트 버튼</button>

      <h3>제목 : {data[id - 1].title}</h3>
      <div
        dangerouslySetInnerHTML={{ __html: contentText }}
        ref={sentenceContent}
      ></div>
    </SentenceContentContainer>
  );
};

export default SentenceContent;
