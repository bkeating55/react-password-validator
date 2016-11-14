import React, { Component } from 'react';
import './App.css';
import Info from './Info.js'

class App extends Component {
  render() {
    return(
      <div class="body">
      <h2>Password Validator</h2>
      <Info/>
      </div>
    );
  }
}

export default App;
