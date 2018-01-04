import React from 'react';
import './card.css';

const Card = (props) => {
  console.log(props)
  const { name, founded, seats, titles, coatOfArms, weapons, words, swornData } = props;
  return (
    <div className="card" onClick={() => swornData()}>
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
