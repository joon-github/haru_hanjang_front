import styled from "styled-components";
import { useEffect } from "react";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import Header from "./components/Header";
function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  const App = styled.div`
    display: flex;
    height: calc(var(--vh, 1vh) * 100);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `;
  return (
    <App>
      <Header></Header>
      <Main></Main>
      <Nav></Nav>
    </App>
  );
}

export default App;
