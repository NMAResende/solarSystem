import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div className="mis" data-testid="missions">
        <Title headline="Missões" />
        <li className="missoes">
          {missions.map((planeta, index) => (<MissionCard
            key={ index }
            name={ planeta.name }
            year={ planeta.year }
            country={ planeta.country }
            destination={ planeta.destination }
          />))}
        </li>
      </div>
    );
  }
}

export default Missions;
