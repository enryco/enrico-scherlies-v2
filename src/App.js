import React, { Component } from 'react';

import Menu from './components/Menu'
import Logo from './components/Logo'

import content from './assets/content'


class App extends Component {

  state = {
    active: "home",
  }

  handleMenu = (target) => {
    this.setState({ active: target})
  }

  render() {
    const switchMenu = (target) => {
      switch (target) {
        case "home":
          return <div className="es-app__menu-wrap" >
            <Logo />
            <Menu handleMenu={this.handleMenu} />
          </div>
          break;
        case "projects":
          return <div className="es-app__projects-wrap" >
            <header>some heder</header>
            <div>some projects</div>
          </div>
          break;
        case "contact":
          return <div className="es-app__contact-wrap" >
            <header>some heder</header>
            <div>some projects</div>
          </div>
          break;
        default:
          break;
      }
    }


    return (
      <div className="es-app">
        {
          switchMenu(this.state.active)
        }
      </div>
    );
  }
}

export default App;

