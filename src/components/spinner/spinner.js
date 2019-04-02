import React from 'react';

import './spinner.css';

export default function Spinner() {
  return (
    <div className="lds-css ng-scope mx-auto">
      <div style={{ width: '100%', height: '100%' }} className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}
