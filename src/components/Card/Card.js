import React from 'react';
import './card.css';

const Card = (props) => {
  const { name, founded, seats, titles, coatOfArms, weapons, words, swornMembers, swornData } = props;

// let swornNames;
//   if(this.props.sworn.length) {
//     return <p>{this.props.sworn}</p>
//   }

  let swornNames;
  if (props.sworn.length) {
      swornNames = props.sworn.map(name => {
        return <div>{name}</div>;
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
