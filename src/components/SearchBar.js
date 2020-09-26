import React from "react";
import { useDispatch } from "react-redux";

import { fetchBooks } from "features/search/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const onKeyUp = ({ target, key }) => {
    if (key === "Enter") {
      dispatch(fetchBooks(target.value));
    }
  };

  const onChange = (event) => {
    console.log("change", event.target.value);
  };

  return <input type="text" onChange={onChange} onKeyUp={onKeyUp} />;
};

export default SearchBar;
