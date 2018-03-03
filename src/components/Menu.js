import React, { Component } from 'react'
import MenuItem from './MenuItem'
import Logo from './Logo'
import _ from 'lodash'
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'

class Menu extends Component {

  state = {
    titles: [
      'projects',
      'writings',
      'contact'
    ],
    slogans: [
      'I <3 solving technical problems :)',
      'Trust me. I\'m an engineer. B-)',
      'Enrico$: echo "Hi!"',
      `console.log('Hi!')`,
      `{ greeting: 'hello!' }`
    ]
  }

  render() {

    return (
      <div className="es-menu es-crazy">
        <Logo />
        <div className="es-menu__single-text">{_.sampleSize(this.state.slogans)}</div>
        {
          _.map(this.state.titles, title => <MenuItem title={title} />)
        }
      </div>
    )
  }
}

export default Menu
