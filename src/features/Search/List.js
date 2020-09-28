import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem";

const S = {
  List: styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  `,
  ItemContainer: styled.li`
    padding: 8px;
    display: flex;
    min-height: 150px;
    max-height: 292px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

    &:hover {
      background: rgba(94, 223, 223, 0.1);
    }
  `
};

const List = ({ data, isLoading, isError }) => {
  return (
    <S.List>
      {data.map((item, index) => (
        <S.ItemContainer key={`im-${index}`}>
          <ListItem {...item} loadNextPage={index === data.length - 1} />
        </S.ItemContainer>
      ))}
    </S.List>
  );
};

export default List;
