import React, { Component } from 'react';

import Menu from './components/Menu'

import content from './fixtures/content'


class App extends Component {

  state = {}

  render() {
    return (
      <div className="es-app">
        <Menu />
      </div>
    );
  }
}

export default App;

