import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  instance as firebaseInstance,
  authService
} from "app/firebaseInstance";
import { showModal } from "features/Modal/modalSlice";

import * as S from "./Auth.style";

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
    <S.Container>
      <S.Form onSubmit={onSubmit}>
        <p>
          {" "}
          환영합니다 :) <br />
          {isNewAccount
            ? "새로운 계정을 생성해 보세요."
            : "사용자 계정으로 로그인합니다."}
        </p>
        <S.Label>
          <span>이메일</span>
          <input
            type="email"
            placeholder="email"
            value={email}
            required
            onChange={onChange}
          />
        </S.Label>
        <S.Label>
          <span>암호</span>
          <input
            type="password"
            placeholder="password"
            value={password}
            required
            onChange={onChange}
          />
        </S.Label>
        <S.Submit>
          <input type="submit" value="확인" />
        </S.Submit>
      </S.Form>

      <S.Toggle>
        <button type="button" onClick={() => setIsNewAccount(false)}>
          로그인하기
        </button>
        <button type="button" onClick={() => setIsNewAccount(true)}>
          가입하기
        </button>
      </S.Toggle>

      <S.ButtonGroup>
        <S.Button name="google" onClick={onClick}>
          구글 로그인
        </S.Button>
        <S.Button name="github" onClick={onClick}>
          깃헙 로그인
        </S.Button>
      </S.ButtonGroup>
    </S.Container>
  );
};

export default Auth;
