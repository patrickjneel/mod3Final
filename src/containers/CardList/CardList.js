import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiCalls from '../../apiCalls/ApiCalls';
import { addHouses } from '../../actions';
import Card from '../../components/Card/Card';
import './card-list.css'

export class CardList extends Component {

  async componentDidMount() {
    const data = await apiCalls.fetchHouses()
    this.props.addHouses(data)
  }

  render() {
    if(this.props.data.length === 0) {
      return <img src={require('./wolf.gif')}/>
    } else {
    let mappedData = this.props.data.map(houseData => {
      return <Card 
              name={houseData.name}
              founded={houseData.founded}
              seats={houseData.seats}
              coatOfArms={houseData.coatOfArms}
              weapons={houseData.ancestralWeapons}
              words={houseData.words}
            />        
    })

    return (
        <div className="card-list">
          {mappedData}
        </div>
      )
    }
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
