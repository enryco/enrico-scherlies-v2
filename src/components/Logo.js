import React from 'react'
import logo from '../assets/logo.svg'


const Logo = props => {

  const { img } = props
  return (
    <div className="es-logo es-crazy">
      <img className="es-logo__img" src={logo} alt=""/>
    </div>
  )
}

export default Logo
