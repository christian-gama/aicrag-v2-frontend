import { authVar } from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const LogoutIcon: React.FC = () => {
  const onClickHandler = () => {
    authVar.logout()
  }

  return (
    <svg
      onClick={onClickHandler}
      xmlns="http://www.w3.org/2000/svg"
      className={classes.logoutIcon}
      data-testid="logout"
      viewBox="0 0 48 48"
    >
      <path
        d="M49,25,33,11.667v8H14.333V30.333H33v8ZM6.333,6.333H27.667V1H6.333A5.349,5.349,0,0,0,1,6.333V43.667A5.349,5.349,0,0,0,6.333,49H27.667V43.667H6.333Z"
        transform="translate(-1 -1)"
      />
    </svg>
  )
}
