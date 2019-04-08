import React from 'react';

import './item-list.css';

const ItemList = props => {
  const renderItems = arr => {
    return arr.map(item => {
      const { id } = item;
      const label = props.renderItem(item);

      return (
        <li
          key={id}
          href="#"
          className="list-group-item list-group-item-action"
          onClick={() => this.props.onPersonSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  const { data } = props;
  const items = renderItems(data);

  return (
    <div className="card rounded lead border-secondary mb-2">
      <ul className="list-group list-group-flush">{items}</ul>
    </div>
  );
};

export default ItemList;
