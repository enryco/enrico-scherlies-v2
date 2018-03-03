import React from 'react'
import logo from '../assets/logo-mini.svg'
import { Link } from 'react-router-dom'

const Header = props => {

  const { title } = props
  return (
    <Link to="/" className="es-header">
      <img className="es-header__logo-mini" src={logo} alt="" />
      <div className="es-header__title">{title}</div>
    </Link>
  )
}

export default Header
