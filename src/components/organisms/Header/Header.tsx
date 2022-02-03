import { formatName } from '@/helpers'
import { getUserByToken } from '@/services/token/getUserByToken'
import { LogoutIcon } from '@/components/utils/icons/LogoutIcon'
import * as classes from './stylesheet'

type HeaderProps = {
  pageName: string
}

export const Header: React.FC<HeaderProps> = ({ pageName }) => {
  const userName = formatName(getUserByToken('name')!)

  return (
    <div className={classes.header} data-testid="header">
      {pageName}
      {userName}
      <LogoutIcon />
    </div>
  )
}
