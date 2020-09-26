import React, { useEffect, useState } from "react";
import { authService } from "app/firebaseInstance";

import useLoggedInState from "hooks/useLoggedInState";

import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

const Header = () => {
  const isLoggedIn = useLoggedInState();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const { displayName, email } = authService.currentUser;
      setUserName(displayName || email.split("@")[0]);
    }
  }, [isLoggedIn]);

  const onClick = async () => {
    try {
      await authService.signOut();
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <header>
      <h1>Eunha's FireBase App</h1>
      {isLoggedIn && <Navigation />}
      <SearchBar />
      {isLoggedIn && (
        <article>
          <p>
            환영합니다! <strong>{userName}</strong>
          </p>
          <button onClick={onClick}>로그아웃</button>
        </article>
      )}
    </header>
  );
};

export default Header;
