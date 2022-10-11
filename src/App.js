import styled from "styled-components";
import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
const Main = React.lazy(() => import("./pages/Main"));
const Nav = React.lazy(() => import("./components/Navs"));
const Header = React.lazy(() => import("./components/Header"));
const MySentence = React.lazy(() => import("./pages/My_Sentence"));
const MyWord = React.lazy(() => import("./pages/My_Word"));
const Game = React.lazy(() => import("./pages/Game"));
const Setting = React.lazy(() => import("./pages/Setting"));
const Loading = React.lazy(() => import("./components/Loding"));
const SentenceContent = React.lazy(() =>
  import("./sentenceComponent/SentenceContent")
);
const AppContainer = styled.div`
  height: 100vh;
`;
function App() {
  const data = useSelector((state) => state.sentenceData);
  const [pathName, setPathName] = useState(window.location.pathname);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AppContainer>
          {pathName === "/" ? null : <Header data={data}></Header>}
          <div className="content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/my_sentence"
                element={<MySentence setPathName={setPathName} />}
              />
              <Route
                path="/my_sentence/:id"
                element={<SentenceContent data={data} />}
              />
              <Route
                path="/my_word"
                element={<MyWord setPathName={setPathName} />}
              />
              <Route
                path="/game"
                element={<Game setPathName={setPathName} />}
              />
              <Route
                path="/setting"
                element={<Setting setPathName={setPathName} />}
              />
            </Routes>
          </div>
          {pathName === "/" ? null : <Nav></Nav>}
        </AppContainer>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
