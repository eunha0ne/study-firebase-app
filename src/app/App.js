import React, { useEffect, useState } from "react";

import Router from "./Router";
import { authService } from "./firebaseInstance";

function App() {
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
      </main>
      <footer>&copy; {new Date().getFullYear()} eunha0ne</footer>
    </>
  );
}

export default App;
