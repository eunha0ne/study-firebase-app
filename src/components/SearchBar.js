import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { fetchBooks } from "features/Search/searchSlice";

const S = {
  Input: styled.input`
    padding: 0 8px;
    height: 40px;
    min-width: 220px;
    box-sizing: border-box;
    border: 1px solid #999;
    border-radius: 4px;
    outline: none;
  `
};

const SearchBar = () => {
  const dispatch = useDispatch();

  const onKeyUp = ({ target, key }) => {
    if (key === "Enter") {
      dispatch(fetchBooks(target.value));
    }
  };

  return <S.Input type="text" onKeyUp={onKeyUp} />;
};

export default SearchBar;
