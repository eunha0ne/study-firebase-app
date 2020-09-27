import React from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import styled, { createGlobalStyle } from "styled-components";
import "assets/styles/normalize.css";

import AppRouter from "./AppRouter";
import Modal from "features/Modal";
import Header from "components/Header";
import Footer from "components/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  #root {
    margin: 0 auto;
    max-width: 940px;
    font-family: 'NanumSquareRound', sans-serif;
  }
  
  dl,
  dt,
  dd,
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
  Main: styled.main``
};

function App() {
  const { modalState } = useSelector((state) => ({
    modalState: state.modal
  }));

  return (
    <Router>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css"
        />
      </Helmet>

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
