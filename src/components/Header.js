import React, { useEffect, useState } from "react";
import { authService } from "app/firebaseInstance";

import useLoggedInState from "hooks/useLoggedInState";
import Navigation from "./Navigation";
import * as S from "./Header.style";

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
    <S.Header>
      <S.Title>프토로타이핑 앱</S.Title>
      {isLoggedIn && (
        <S.RightArea>
          <Navigation />
          <S.UserPresence>
            <p>
              환영합니다! <br />
              <strong>{userName}</strong>
            </p>
            <button onClick={onClick}>로그아웃</button>
          </S.UserPresence>
        </S.RightArea>
      )}
    </S.Header>
  );
};

export default Header;
