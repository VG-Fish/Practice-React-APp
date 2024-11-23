// import { MouseEvent } from "react";

import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
