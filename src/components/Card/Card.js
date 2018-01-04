import React from 'react';
import './card.css';

const Card = (props) => {
  const { name, founded, seats, titles, coatOfArms, weapons, words } = props;
  return (
    <div className="card">
      <h3>{name}</h3>
      <h4>{founded}</h4>
      <h4>{seats}</h4>
      <h4>{titles}</h4>
      <h4>{coatOfArms}</h4>
      <h4>{weapons}</h4>
      <h4>{words}</h4>
    </div>
  );
};

export default Card;
