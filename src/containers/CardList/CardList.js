import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiCalls from '../../apiCalls/ApiCalls';
import { addHouses } from '../../actions';

class CardList extends Component {

  async componentDidMount() {
    const data = await apiCalls.fetchHouses()
    this.props.addHouses(data)
  }

  render() {
    return (
      <div className="card-list">
      Cards Go Here
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addHouses: (data) => {
      dispatch(addHouses(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
