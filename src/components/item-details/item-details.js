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
    const { item, image, loading } = this.state;

    let itemView = (
      <span className="h3 mx-auto align-self-center">
        Select an item from a list
      </span>
    );

    if (loading) {
      itemView = <Spinner />;
    } else if (item && image) {
      itemView = (
        <React.Fragment>
          <div className="item-image-div">
            <img
              className="card-img m-3 img-fluid item-img"
              src={image}
              alt="planet"
            />
          </div>

          <div className="card-body lead item-card-body">
            <h4 className="card-title text-info">{item.name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, child => {
                return React.cloneElement(child, { item });
              })}
            </ul>
          </div>
        </React.Fragment>
      );
    }

    return (
      <div className="card rounded border-secondary d-flex flex-row h-100">
        {itemView}
      </div>
    );
  }
}
