import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  instance as firebaseInstance,
  authService
} from "app/firebaseInstance";
import { showModal } from "features/Modal/modalSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewAccount, setIsNewAccount] = useState(false);

  const toggleAccout = () => {
    setIsNewAccount(!isNewAccount);
  };

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

  const onClick = async ({ target }) => {
    const { name } = target;
    let provider = null;

    try {
      if (name === "google") {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
      } else if (name === "github") {
        provider = new firebaseInstance.auth.GithubAuthProvider();
      }

      await authService.signInWithPopup(provider);
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
        <p>
          {isNewAccount
            ? "새로운 계정을 생성해 보세요."
            : "사용자 계정으로 로그인합니다."}
        </p>
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
          <input type="submit" value="확인" />
        </label>
      </form>

      <div>
        <button type="button" onClick={toggleAccout}>
          {isNewAccount ? "로그인하기" : "가입하기"}
        </button>
        <button name="google" onClick={onClick}>
          구글 로그인
        </button>
        <button name="github" onClick={onClick}>
          깃헙 로그인
        </button>
      </div>
    </div>
  );
};

export default Auth;
