import React from "react";

import List from "features/Search/List";
import { useSelector } from "react-redux";

const Index = () => {
  const { searchState } = useSelector((state) => ({
    searchState: state.search
  }));

  return <List {...searchState} />;
};

export default Index;
