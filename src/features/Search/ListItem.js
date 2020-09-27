import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import blank from "assets/images/blank.png";

const S = {
  Article: styled.article`
    display: flex;
    height: 100%;

    header {
      min-width: 120px;
      height: 100%;
      border-radius: 4px;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.03);
    }
  `,
  Content: styled.ul`
    position: relative;
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;

    li {
      margin-top: 8px;

      &:first-of-type {
        margin-top: 0;
        font-weight: bold;
      }

      &:not(:first-of-type) {
        color: #666;
      }

      &:last-of-type {
        position: absolute;
        right: 0;
        bottom: 8px;
      }
    }
  `
};

const ListItem = ({ thumbnail, title, authors, price }) => {
  const itemElement = useRef();
  const [src, setSrc] = useState(blank);

  useEffect(() => {
    const iObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && thumbnail) {
        setSrc(thumbnail);
      }
    });

    iObserver.observe(itemElement.current);
    return () => iObserver.disconnect();
  }, [itemElement, thumbnail]);

  return (
    <S.Article ref={itemElement}>
      <header>
        <img src={src} alt={title} />
      </header>

      <S.Content>
        <li>{title}</li>
        <li>{authors.join(", ")}</li>
        <li>{price.toLocaleString()}원</li>
      </S.Content>
    </S.Article>
  );
};

export default ListItem;
