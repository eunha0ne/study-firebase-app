import React from "react";
import { useDispatch } from "react-redux";

import { hideModal } from "features/modalSlice";

export default ({ data }) => {
  const dispatch = useDispatch();
  const { message } = data;

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
