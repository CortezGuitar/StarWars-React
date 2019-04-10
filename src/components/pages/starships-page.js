import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipList } from '../containers/';

const StarshipsPage = ({ history }) => {
  return (
    <React.Fragment>
      <h2 className="text-center mb-3 text-success">Starships</h2>
      <StarshipList
        onItemSelected={id => {
          history.push(id);
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(StarshipsPage);
