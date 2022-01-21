import React from 'react'
import { Link } from 'react-router-dom'
import * as style from './stylesheet'

type MenuProps = {
  buttons: Array<{ buttonName: string, to: string, active?: boolean }>
}

const Menu: React.FC<MenuProps> = ({ buttons }) => {
  return (
    <div className={style.menu} data-testid="menu">
      {buttons.map(({ buttonName, to, active }, index) => {
        const menuButtonStyle = style.menuButtonRecipe({
          active: !!active
        })

        return (
          <Link
            key={`${buttonName}-${index}`}
            to={to.toLowerCase()}
            className={menuButtonStyle}
            data-active={!!active}
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
