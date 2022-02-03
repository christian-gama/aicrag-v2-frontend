import * as classes from './stylesheet'

export const MenuIcon: React.FC = () => {
  return (
    <div className={classes.menuIconWrapper} data-testid="menu-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classes.menuIcon}
        viewBox="0 0 72 48"
      >
        <path
          d="M4.5,57h72V49H4.5Zm0-20h72V29H4.5Zm0-28v8h72V9Z"
          transform="translate(-4.5 -9)"
        />
      </svg>
    </div>
  )
}
