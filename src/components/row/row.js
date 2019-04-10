import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ left, right }) => {
  return (
    <div className="row mb-3">
      <div className="col-lg-6">{left}</div>
      <div className="col-lg-6">{right}</div>
    </div>
  );
};

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;
