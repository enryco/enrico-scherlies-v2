import React from 'react'

const MenuItem = props => {

  const { title } = props
  return (
    <div className="es-menu__item">
      <span className="es-menu__text">
        {title}
      </span>
    </div>
  )
}

export default MenuItem
