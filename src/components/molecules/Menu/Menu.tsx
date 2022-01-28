import React from 'react'
import { NavLink } from 'react-router-dom'
import * as style from './stylesheet'

type MenuProps = {
  buttons: Array<{ buttonName: string, to: string, active?: boolean }>
}

const Menu: React.FC<MenuProps> = ({ buttons }) => {
  return (
    <div className={style.menu} data-testid="menu">
      {buttons.map(({ buttonName, to, active }, index) => {
        return (
          <NavLink
            data-testid="menu-link"
            key={`${buttonName}-${index}`}
            className={({ isActive }) =>
              style.menuButtonRecipe({
                active: active ?? isActive
              })
            }
            to={to.toLowerCase()}
          >
            {buttonName}
          </NavLink>
        )
      })}
    </div>
  )
}

export default Menu
