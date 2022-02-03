import { useState } from 'react'
import { formatName } from '@/helpers'
import { getUserByToken } from '@/services/token/getUserByToken'
import { LogoutIcon } from '@/components/utils/icons/LogoutIcon'
import { QuestionIcon } from '@/components/utils/icons/QuestionIcon'
import { authVar } from '@/external/graphql/reactiveVars'
import { About } from '../About'
import * as classes from './stylesheet'

type HeaderProps = {
  pageName: string
}

export const Header: React.FC<HeaderProps> = ({ pageName }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const userName = formatName(getUserByToken('name')!)
  const onLogoutHandler = () => {
    authVar.logout()
  }

  const onAboutHandler = () => {
    setIsAboutOpen(true)
  }

  return (
    <>
      <div className={classes.header} data-testid="header">
        {pageName}
        {userName}
        <div onClick={onLogoutHandler}>
          <LogoutIcon />
        </div>

        <div onClick={onAboutHandler}>
          <QuestionIcon />
        </div>
      </div>

      <About isOpen={isAboutOpen} />
    </>
  )
}
