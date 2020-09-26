import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Router from "./Router";
import { authService } from "./firebaseInstance";

import Modal from "features/Modal";

function App() {
  const { modal } = useSelector((state) => ({
    modal: state.modal
  }));

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      <header>...</header>
      <main>
        <Router isLoggedIn={isLoggedIn} />
        {modal.isOpen && <Modal data={modal} />}
      </main>
      <footer>&copy; {new Date().getFullYear()} eunha0ne</footer>
    </>
  );
}

export default App;
