import React from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import AppRouter from "./AppRouter";
import Modal from "features/Modal";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  const { modalState } = useSelector((state) => ({
    modalState: state.modal
  }));

  return (
    <Router>
      <Header />
      <main>
        <AppRouter />
        {modalState.isOpen && <Modal {...modalState} />}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
