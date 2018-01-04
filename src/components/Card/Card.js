import React from 'react';
import './card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { 
    name, 
    founded, 
    seats, 
    titles, 
    coatOfArms, 
    weapons, 
    words, 
    swornMembers, 
    swornData 
  } = props;

  let swornNames;
  if (props.sworn.length) {
    swornNames = props.sworn.map(name => {
      return <div key={name}>{name}</div>;
    });
  } 

  
  return (
    <div className="card" onClick={() => swornData(swornMembers)}>
      <h3>{name}</h3>
      <h4>{founded}</h4>
      <h4>{seats}</h4>
      <h4>{titles}</h4>
      <h4>{coatOfArms}</h4>
      <h4>{weapons}</h4>
      <h4>{words}</h4>
      <h5>{swornNames}</h5>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  founded: PropTypes.string,
  seats: PropTypes.string,
  titles: PropTypes.string,
  coatOfArms: PropTypes.string,
  weapons: PropTypes.string,
  words: PropTypes.string,
  swornNames: PropTypes.string,
  swornMembers: PropTypes.string,
  swornData: PropTypes.array,
  sowrn: PropTypes.string
};
