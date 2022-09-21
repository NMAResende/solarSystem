import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <li>
          {missions.map((planeta, index) => (<MissionCard
            key={ index }
            planetas={ planeta }
          />))}
        </li>
      </div>
    );
  }
}

export default Missions;
