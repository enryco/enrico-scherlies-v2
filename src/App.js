import React, { Component } from 'react';

import Menu from './components/Menu'
import Logo from './components/Logo'
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'

import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'

import content from './assets/content'


class App extends Component {

  state = {
    active: "home",
  }

  handleMenu = (target) => {
    this.setState({ active: target })
  }

  render() {
    return (
      <div className="es-app">
        <Route path="/" render={() => <Menu />} />
        <Switch>
          <Route path="/projects" render={() => <Projects />} />
          <Route path="/writings" render={() => null} />
          <Route path="/contact" render={() => <Contact />} />
        </Switch>
      </div>
    );
  }
}

export default App;
