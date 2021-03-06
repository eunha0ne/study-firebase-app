import React from "react";
import styled from "styled-components";

import SearchBar from "components/SearchBar";
import SearchResult from "features/Search";

const S = {
  Section: styled.section`
    margin: 0 auto;
    padding: 0 16px;
  `,
  Header: styled.header`
    margin: 16px 0;
    display: flex;
    align-items: center;

    h2 {
      font-size: 1.6rem;
      margin-right: 24px;
      @media (max-width: 576px) {
        font-size: 0.8rem;
      }
    }
  `
};

const Home = () => {
  return (
    <S.Section>
      <S.Header>
        <h2>도서 검색 시스템</h2>
        <SearchBar />
      </S.Header>

      <SearchResult />
    </S.Section>
  );
};

export default Home;
