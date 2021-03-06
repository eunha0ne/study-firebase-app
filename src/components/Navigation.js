import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const S = {
  Nav: styled.nav`
    height: 100%;
    margin-right: 60px;

    @media (max-width: 576px) {
      margin-right: 16px;
    }
  `,
  List: styled.ul`
    display: flex;
    height: 100%;
  `,
  Item: styled.li`
    margin: 0 8px;
    min-width: 50px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
      text-decoration: none;
      box-sizing: border-box;
      color: inherit;
      border-bottom: 3px solid transparent;

      &.is-selected {
        border-bottom: 3px solid #1cbaba;
      }
    }
  `
};

const Navigation = () => {
  return (
    <S.Nav>
      <S.List>
        <S.Item>
          <NavLink to="/" exact activeClassName="is-selected">
            처음으로
          </NavLink>
        </S.Item>
        <S.Item>
          <NavLink to="/settings" exact activeClassName="is-selected">
            설정
          </NavLink>
        </S.Item>
      </S.List>
    </S.Nav>
  );
};

export default Navigation;
