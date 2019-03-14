import React, { Component } from 'react';

import './App.css';

import Scene from './Scene'

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <Scene
            number="0"
            text="You are standing"
            choices={['Sit', 'Stand']}
            onSelect={(index => console.log(index))}
          />
        </form>
      </div>
    );
  }
}

export default App;
