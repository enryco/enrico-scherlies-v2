import React from 'react'
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'

const MenuItem = props => {

  const { title } = props
  return (
    <Link className="es-menu__item" to={`/${title}`} >
      <span className="es-menu__text">
        {title}
      </span>
    </Link>
  )
}

export default MenuItem
