import React, { useEffect, useState, useRef } from "react";
import blank from "assets/images/blank.png";

const ListItem = ({ thumbnail = blank, title, authors, price }) => {
  const itemElement = useRef();
  const [src, setSrc] = useState(blank);

  useEffect(() => {
    const iObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSrc(thumbnail);
      }
    });

    iObserver.observe(itemElement.current);
    return () => iObserver.disconnect();
  }, [itemElement, thumbnail]);

  return (
    <article ref={itemElement}>
      <header>
        <img src={src} alt={title} />
      </header>
      <ul>
        <li>{title}</li>
        <li>{authors.join(", ")}</li>
        <li>{price.toLocaleString()}원</li>
      </ul>
    </article>
  );
};

export default ListItem;
