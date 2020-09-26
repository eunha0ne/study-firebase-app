import React from "react";
import { useSelector } from "react-redux";

import useLoggedInState from "hooks/useLoggedInState";

import AppRouter from "./Router";
import Header from "components/Header";
import Footer from "components/Footer";
import Modal from "features/Modal";

function App() {
  const { modal: modalState } = useSelector((state) => ({
    modal: state.modal
  }));

  const isLoggedIn = useLoggedInState();

  return (
    <>
      <Header />
      <main>
        <AppRouter isLoggedIn={isLoggedIn} />
        {modalState.isOpen && <Modal {...modalState} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
