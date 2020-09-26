import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { authService } from "app/firebaseInstance";
import { showModal } from "features/modalSlice";

export default () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewAccount, setIsNewAccount] = useState(true);

  const onChange = ({ target }) => {
    const { type, value } = target;

    if (type === "email") {
      setEmail(value);
    } else if (type === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      if (isNewAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      dispatch(
        showModal({
          message: error.message
        })
      );
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          이메일
          <input
            type="email"
            placeholder="email"
            value={email}
            required
            onChange={onChange}
          />
        </label>
        <label>
          암호
          <input
            type="password"
            placeholder="password"
            value={password}
            required
            onChange={onChange}
          />
        </label>
        <label>
          가입
          <input type="submit" value="가입" />
        </label>
      </form>
      <div>
        <button>구글 로그인</button>
        <button>깃헙 로그인</button>
      </div>
    </div>
  );
};
