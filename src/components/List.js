import React from "react";

import ListItem from "./ListItem";

const List = ({ data, isLoading, isError }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={`im-${index}`} style={{ height: "300px" }}>
          <ListItem {...item} loadNextPage={index === data.length - 1} />
        </li>
      ))}
    </ul>
  );
};

export default List;
