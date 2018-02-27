import React, { Component } from 'react';

import Menu from './components/Menu'
import Logo from './components/Logo'

import content from './assets/content'


class App extends Component {

  state = {}

  render() {
    return (
      <div className="es-app">
        <Logo />
        <Menu />
      </div>
    );
  }
}

export default App;

