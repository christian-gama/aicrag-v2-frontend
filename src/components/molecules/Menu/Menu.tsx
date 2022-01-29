
import { NavLink } from 'react-router-dom'
import * as classes from './stylesheet'

type MenuProps = {
  buttons: Array<{ buttonName: string, to: string, active?: boolean }>
}

export const Menu: React.FC<MenuProps> = ({ buttons }) => {
  return (
    <div className={classes.menu} data-testid="menu">
      {buttons.map(({ buttonName, to, active }, index) => {
        return (
          <NavLink
            data-testid="menu-link"
            key={`${buttonName}-${index}`}
            className={({ isActive }) =>
              classes.menuButtonRecipe({
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
