import PropTypes from 'prop-types';
import React from 'react';

class MissionCard extends React.Component {
  render() {
    const { planetas: { name, year, country, destination } } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  planetas: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionCard;
