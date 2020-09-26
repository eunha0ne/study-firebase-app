import React from "react";
import { useSelector } from "react-redux";

import useLoggedInState from "hooks/useLoggedInState";

import Router from "./Router";
import Modal from "features/Modal";
import Header from "components/Header";

function App() {
  const { modal } = useSelector((state) => ({
    modal: state.modal
  }));

  const isLoggedIn = useLoggedInState();

  return (
    <>
      <Header />
      <main>
        <Router isLoggedIn={isLoggedIn} />
        {modal.isOpen && <Modal data={modal} />}
      </main>
      <footer>&copy; {new Date().getFullYear()} eunha0ne</footer>
    </>
  );
}

export default App;
