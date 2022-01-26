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
            data-testid="menu-link"
            key={`${buttonName}-${index}`}
            className={menuButtonStyle}
            data-active={!!active}
            to={to.toLowerCase()}
          >
            {buttonName}
          </Link>
        )
      })}
    </div>
  )
}

export default Menu
