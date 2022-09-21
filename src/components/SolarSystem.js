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
          {planets.map((name, image, index) => (<PlanetCard
            key={ index }
            planetName={ name }
            planetImage={ image }
          />))}
        </li>
      </div>
    );
  }
}

export default SolarSystem;
