import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeClassName="is-select">
          처음으로
        </NavLink>
      </li>
      <li>
        <NavLink to="/settings" exact activeClassName="is-select">
          설정
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
