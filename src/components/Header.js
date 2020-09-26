import React, { useEffect, useState } from "react";
import { authService } from "app/firebaseInstance";

import useLoggedInState from "hooks/useLoggedInState";

export default () => {
  const isLoggedIn = useLoggedInState();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const { displayName, email } = authService.currentUser;
      setUserName(displayName || email.split("@")[0]);
    }
  }, [isLoggedIn]);

  return (
    <header>
      <h1>FireBase App</h1>
      {userName && (
        <p>
          환영합니다! <strong>{userName}</strong>
        </p>
      )}
    </header>
  );
};
