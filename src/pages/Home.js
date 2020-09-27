import React from "react";

import SearchBar from "components/SearchBar";
import SearchResult from "features/Search";

const Home = () => {
  return (
    <section>
      <header>
        <h2>검색 결과</h2>
      </header>

      <SearchBar />
      <SearchResult />
    </section>
  );
};

export default Home;
