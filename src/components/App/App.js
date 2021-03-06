import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from '../../containers/CardList/CardList';
class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <CardList />
        </div>
      </div>
    );
  }
}

export default App;         
