import React from 'react';

import './item-list.css';

const ItemList = props => {
  const renderItems = arr => {
    arr.length = 6;
    return arr.map(item => {
      const { id } = item;
      const label = props.renderItem(item);

      return (
        <li
          key={id}
          href="#"
          className="list-group-item list-group-item-action"
          onClick={() => props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  const { data } = props;
  const items = renderItems(data);

  return (
    <div className="card rounded lead border-secondary">
      <ul className="list-group list-group-flush">{items}</ul>
    </div>
  );
};

export default ItemList;
