import React from 'react';
import Row from '../row';
import { PersonDetails, PersonList } from '../containers/';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <React.Fragment>
      <h2 className="text-center mb-3 text-success">People</h2>
      <Row
        left={<PersonList onItemSelected={id => history.push(id)} />}
        right={<PersonDetails itemId={id} />}
      />
    </React.Fragment>
  );
};

export default PeoplePage;
