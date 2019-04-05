import React, { Component } from 'react';

import './item-details.css';

import Spinner from '../spinner';

export const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      {label}: {item[field]}
    </li>
  );
};

export default class ItemDetails extends Component {
  state = { item: null, loading: false, image: null };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    this.setState({ loading: true });

    getData(itemId).then(item =>
      this.setState({ item, loading: false, image: getImageUrl(item) })
    );
  }

  render() {
    const { item, image } = this.state;

    if (!this.state.item && !this.state.loading) {
      return <span className="h3 mx-auto">Select an item from a list</span>;
    } else if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <div className="card rounded border-secondary d-flex flex-row ">
        <div className="item-image-div">
          <img
            className="card-img m-3 img-fluid item-img"
            src={image}
            alt="planet"
          />
        </div>

        <div className="card-body lead align-self-center item-card-body">
          <h4 className="card-title">{item.name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
