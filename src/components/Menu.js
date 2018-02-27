import React, { Component } from 'react'
import MenuItem from './MenuItem'
import _ from 'lodash'

class Menu extends Component {

  state = {
    titles : [
      "projects",
      "writings",
      "contact"
    ]
  }

  render() {

    return (
      <div className="es-menu">
        {
          _.map(this.state.titles, title => <MenuItem title={title} /> )
        }
      </div>
    )
  }
}

export default Menu
