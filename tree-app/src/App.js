import React, { Component } from 'react';
import './App.css';
import Tree from './components/tree.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Family Tree</h1>
        </header>
        <Tree />
      </div>
    );
  }
}

export default App;
