import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronIcon } from '@/components/utils/icons'
import * as classes from './stylesheet'

type SideBarButtonProps = {
  Icon: JSX.Element
  to: string
}

export const SideBarButton: React.FC<SideBarButtonProps> = ({
  children,
  Icon,
  to
}) => {
  const [isLinkActive, setIsLinkActive] = useState(false)

  return (
    <NavLink
      className={({ isActive }) => {
        setTimeout(() => setIsLinkActive(isActive))
        return classes.sideBarButtonRecipe({ isActive })
      }}
      data-active={isLinkActive}
      to={to}
    >
      <li className={classes.sideBarButtonLeft}>
        {Icon}
        <span className={classes.sideBarButtonNavLink}>{children}</span>
      </li>

      <div className={classes.sideBarButtonChevron}>
        <ChevronIcon size="xsm" color="primary" />
      </div>
    </NavLink>
  )
}
