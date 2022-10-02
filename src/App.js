import styled from "styled-components";
import React, { Suspense } from "react";
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
const AppContainer = styled.div`
  height: 100vh;
`;
function App() {
  const isMain = useSelector((state) => state.onlyMainView[0].isMain);
  console.log(isMain);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AppContainer>
          {isMain ? null : <Header></Header>}
          <div className="content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/my_sentence" element={<MySentence />} />
              <Route path="/my_word" element={<MyWord />} />
              <Route path="/game" element={<Game />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </div>
          {isMain ? null : <Nav></Nav>}
        </AppContainer>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
