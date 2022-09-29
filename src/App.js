import styled from "styled-components";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Nav from "./components/Navs";
import Header from "./components/Header";
import My_Sentence from "./pages/My_Sentence";
import My_Word from "./pages/My_Word";
import Game from "./pages/Game";
import Setting from "./pages/Setting";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  const App = styled.div`
    /* background-color: aqua; */
    height: calc(var(--vh, 1vh) * 100);
  `;
  return (
    <BrowserRouter>
      <App>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/my_sentence" element={<My_Sentence />} />
          <Route path="/my_word" element={<My_Word />} />
          <Route path="/game" element={<Game />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        <Nav></Nav>
      </App>
    </BrowserRouter>
  );
}

export default App;
