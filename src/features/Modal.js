import React from "react";

export default ({ data }) => {
  const { message } = data;

  return (
    <article>
      <p>{message}</p>
    </article>
  );
};
