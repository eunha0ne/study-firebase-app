import React, { useState } from "react";

import Router from "./Router";
import { authService } from "./firebaseInstance";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

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
