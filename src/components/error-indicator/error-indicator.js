import React from 'react';

export default function ErrorIndicator() {
  return (
    <div className="mx-auto text-warning m-3">
      <span className="mx-auto">
        <i className="fas fa-satellite-dish display-1" />
      </span>
      <p className="lead">Something has gone wrong!</p>
    </div>
  );
}
