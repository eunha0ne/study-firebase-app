import React from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import useLoggedInState from "hooks/useLoggedInState";

import AppRouter from "./AppRouter";
import Header from "components/Header";
import Footer from "components/Footer";
import Modal from "features/Modal";

function App() {
  const { modal: modalState } = useSelector((state) => ({
    modal: state.modal
  }));

  const isLoggedIn = useLoggedInState();

  return (
    <Router>
      <Header />
      <main>
        <AppRouter isLoggedIn={isLoggedIn} />
        {modalState.isOpen && <Modal {...modalState} />}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
