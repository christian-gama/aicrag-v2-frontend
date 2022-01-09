import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuProps from './protocols/Menu.model'
import { style } from './stylesheet'

const Menu: React.FC<MenuProps> = (props) => {
  const location = useLocation()

  return (
    <div className={style.menu} data-testid="menu">
      {props.buttons.map((button, index) => {
        const isActive = location.pathname.replace(props.url, '').includes(button.toLowerCase())

        const menuButtonStyle = style.menuButtonRecipe({
          active: isActive
        })

        return (
          <Link
            key={`${button}-${index}`}
            to={`${props.url}${button.toLowerCase()}`}
            className={menuButtonStyle}
            data-active={isActive}
            data-testid={`menu-link-${button.toLowerCase()}`}
          >
            {button}
          </Link>
        )
      })}
    </div>
  )
}

export default Menu
