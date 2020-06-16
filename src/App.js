import React, { Component } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Services from './Components/Services';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Body />
        <Services />
      </div>
    )
  }
}

export default App

