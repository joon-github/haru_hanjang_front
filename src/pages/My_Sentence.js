import React from "react";
import { useParams } from "react-router-dom";
const My_Sentence = () => {
  const userId = useParams();
  console.log(userId);
  return <div>sentence</div>;
};

export default My_Sentence;
