import React, { Component } from 'react';
import CharacterList from './CharactersList';
import '../css/style.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>{'\u2606'} SuperSquad  {'\u2606'}</h1> { /*  & #9734; */ }
        <CharacterList />
      </div>
    )
  }
}

export default App;
