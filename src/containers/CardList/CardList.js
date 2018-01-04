import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiCalls from '../../apiCalls/ApiCalls'

class CardList extends Component {

  async componentDidMount() {
    const data = await apiCalls.fetchHouses()
    console.log(data)
  }

  render() {
    return (
      <div className="card-list">
      Cards Go Here
      </div>
    )
  }
}

export default CardList;
