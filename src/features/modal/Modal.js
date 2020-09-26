import React from "react";
import { useDispatch } from "react-redux";

import { hideModal } from "features/modal/modalSlice";

const Modal = ({ message }) => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(hideModal());
  };

  return (
    <article>
      <p>{message}</p>
      <button onClick={onClose}>닫기</button>
    </article>
  );
};

export default Modal;
