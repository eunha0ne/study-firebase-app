import React from "react";
import { useDispatch } from "react-redux";

import { hideModal } from "./modalSlice";
import styled from "styled-components";

const S = {
  Backdrop: styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
  `,
  Modal: styled.article`
    position: relative;
    padding: 60px;
    max-width: 300px;
    background: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-right: 4px;

    button {
      position: absolute;
      right: 15px;
      top: 15px;
    }
  `
};

const Index = ({ message }) => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(hideModal());
  };

  return (
    <S.Backdrop>
      <S.Modal>
        <p>{message}</p>
        <button onClick={onClose}>닫기</button>
      </S.Modal>
    </S.Backdrop>
  );
};

export default Index;
