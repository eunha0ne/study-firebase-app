import React from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import AppRouter from "./AppRouter";
import Modal from "features/Modal";
import Header from "components/Header";
import Footer from "components/Footer";

const GlobalStyle = createGlobalStyle`  
  #root {
    margin: 0 auto;
    max-width: 1024px;
  }
  
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  
  ul {
    list-style: none;
  }
  
  p {
    margin: 0;
  }
`;

const S = {
  Main: styled.main`
    border: 1px solid red;
  `
};

function App() {
  const { modalState } = useSelector((state) => ({
    modalState: state.modal
  }));

  return (
    <Router>
      <Header />
      <S.Main>
        <AppRouter />
        {modalState.isOpen && <Modal {...modalState} />}
      </S.Main>
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
