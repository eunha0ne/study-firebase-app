import React from "react";

import SearchResult from "features/Search";

const Home = () => {
  return (
    <section>
      <header>
        <h2>검색 결과</h2>
      </header>
      <SearchResult />
    </section>
  );
};

export default Home;
