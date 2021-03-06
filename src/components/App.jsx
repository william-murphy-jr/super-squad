import React, { Component } from 'react';
import CharacterList from './CharactersList';
import HeroList from './HeroList';
import '../css/style.css';
import SquadStats from './SquadStats';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>{'\u2606'} SuperSquad  {'\u2606'}</h1> { /*  & #9734; */ }
        <div className="row">
          <CharacterList />
          <HeroList /> 
          <SquadStats />     
        </div>
      </div>
    )
  }
}

export default App;
