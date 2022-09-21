import PropTypes from 'prop-types';
import React from 'react';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="conteiner">
        <p data-testid="mission-name" className="nome">{name}</p>
        <p data-testid="mission-year" className="ano">{year}</p>
        <p data-testid="mission-country" className="pais">{country}</p>
        <p data-testid="mission-destination" className="destino">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
