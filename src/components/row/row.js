import React from 'react';

const Row = ({ left, right }) => {
  return (
    <div className="row mb-3">
      <div className="col-lg-6">{left}</div>
      <div className="col-lg-6">{right}</div>
    </div>
  );
};

export default Row;