import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiCalls from '../../apiCalls/ApiCalls';
import { addHouses } from '../../actions';
import Card from '../../components/Card/Card';
import './card-list.css'

export class CardList extends Component {
  constructor() {
    super()
    this.state = {
      sworn: []
    }
    this.swornData = this.swornData.bind(this);
  }

  async componentDidMount() {
    const data = await apiCalls.fetchHouses()
    this.props.addHouses(data)
  }

  async swornData(url) {
   const memberData = await apiCalls.fetchMembers(url);
   let members = memberData.map(name => {
    return name.name
   })
   this.setState({ sworn: members })
  }


  render() {
    console.log(this.state)
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
              swornMembers={houseData.swornMembers}
              swornData={this.swornData}
              sworn={this.state.sworn}
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
