import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as style from './stylesheet'

type MenuProps = {
  buttons: Array<{ buttonName: string, to: string }>
  url: string
}

const Menu: React.FC<MenuProps> = (props) => {
  const location = useLocation()

  return (
    <div className={style.menu} data-testid="menu">
      {props.buttons.map(({ buttonName, to }, index) => {
        const isActive = location.pathname.replace(props.url, '').includes(to.toLowerCase())

        const menuButtonStyle = style.menuButtonRecipe({
          active: isActive
        })

        return (
          <Link
            key={`${buttonName}-${index}`}
            to={`${props.url}${to.toLowerCase()}`}
            className={menuButtonStyle}
            data-active={isActive}
            data-testid={`menu-link-${buttonName.toLowerCase()}`}
          >
            {buttonName}
          </Link>
        )
      })}
    </div>
  )
}

export default Menu
