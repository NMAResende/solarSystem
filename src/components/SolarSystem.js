import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <li>
          {planets.map((planeta, index) => (<PlanetCard
            key={ index }
            planetName={ planeta.name }
            planetImage={ planeta.image }
          />))}
        </li>
      </div>
    );
  }
}

export default SolarSystem;
