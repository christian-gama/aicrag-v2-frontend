import * as classes from './stylesheet'

type MenuIconProps = {
  isOpen?: boolean
}

export const MenuIcon: React.FC<MenuIconProps> = ({ isOpen }) => {
  const viewBox = isOpen ? '0 0 48 48' : '0 0 72 48'

  return (
    <div className={classes.menuIconWrapper} data-testid="menu-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classes.menuIcon}
        viewBox={viewBox}
      >
        {isOpen
          ? (
          <path
            d="M48,4.8,43.2,0,24,19.2,4.8,0,0,4.8,19.2,24,0,43.2,4.8,48,24,28.8,43.2,48,48,43.2,28.8,24Z"
            fillRule="evenodd"
          />
            )
          : (
          <path
            d="M4.5,57h72V49H4.5Zm0-20h72V29H4.5Zm0-28v8h72V9Z"
            transform="translate(-4.5 -9)"
          />
            )}
      </svg>
    </div>
  )
}
