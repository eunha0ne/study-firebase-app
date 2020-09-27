import React from "react";

const List = ({ data, isLoading, isError }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={`im-${index}`}>
          <article>
            <header>
              <img src={item.thumbnail} alt={item.title} />
            </header>
            <ul>
              <li>{item.title}</li>
              <li>{item.authors.join(", ")}</li>
              <li>{item.price.toLocaleString()}원</li>
            </ul>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default List;
