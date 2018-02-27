import React from 'react'
import logo from '../assets/logo.svg'


const Logo = props => {

  const { img } = props
  return (
    <div className="es-logo">
      <img src={logo} alt=""/>
    </div>
  )
}

export default Logo
