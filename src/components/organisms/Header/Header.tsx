import { useState } from 'react'
import { formatName } from '@/helpers'
import { getUserByToken } from '@/services/token/getUserByToken'
import { useWindowDimensions } from '@/components/_hooks'
import { BackIcon } from '@/components/utils/icons'
import { LogoutIcon } from '@/components/utils/icons/LogoutIcon'
import { MenuIcon } from '@/components/utils/icons/MenuIcon'
import { QuestionIcon } from '@/components/utils/icons/QuestionIcon'
import { SettingsIcon } from '@/components/utils/icons/SettingsIcon'
import { H1 } from '@/components/utils/texts/H1'
import { P } from '@/components/utils/texts/P'
import { authVar } from '@/external/graphql/reactiveVars'
import { About } from '../About'
import * as classes from './stylesheet'

type HeaderProps = {
  pageName: string
  backHandler?: () => void
}

export const Header: React.FC<HeaderProps> = ({ pageName, backHandler }) => {
  const { width } = useWindowDimensions()
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const userName = formatName(getUserByToken('name')!)
  const onLogoutHandler = () => {
    authVar.logout()
  }

  const onAboutHandler = () => {
    setIsAboutOpen(true)
  }

  const onDismissHandler = () => {
    setIsAboutOpen(false)
  }

  const renderMenu = () => {
    if (width <= 820) {
      return <MenuIcon />
    }

    return (
      <>
        <div className={classes.headerUserName}>
          <P color="white">{`Olá, ${userName}!`}</P>
        </div>

        <div className={classes.headerIconGroup}>
          <div>
            <SettingsIcon />
          </div>

          <div onClick={onAboutHandler}>
            <QuestionIcon />
          </div>

          <div onClick={onLogoutHandler}>
            <LogoutIcon />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className={classes.header} data-testid="header">
        <div className={classes.headerLeft}>
          {backHandler && (
            <div className={classes.headerBackIcon} onClick={backHandler}>
              <BackIcon color="white" />
            </div>
          )}

          <div className={classes.headerPageName}>
            <H1 color="white">{pageName}</H1>
          </div>
        </div>

        <div className={classes.headerRight}>{renderMenu()}</div>
      </div>

      <About isOpen={isAboutOpen} dismissHandler={onDismissHandler} />
    </>
  )
}
