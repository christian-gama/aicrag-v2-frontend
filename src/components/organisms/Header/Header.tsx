import { useState } from 'react'
import { formatName } from '@/helpers'
import { useWindowDimensions } from '@/components/_hooks'
import { Alert } from '@/components/molecules/Alert'
import { BackIcon } from '@/components/utils/icons'
import { LogoutIcon } from '@/components/utils/icons/LogoutIcon'
import { MenuIcon } from '@/components/utils/icons/MenuIcon'
import { QuestionIcon } from '@/components/utils/icons/QuestionIcon'
import { H1 } from '@/components/utils/texts/H1'
import { P } from '@/components/utils/texts/P'
import { authVar, useAuth } from '@/external/graphql/reactiveVars'
import { About } from '../About'
import { HeaderMenu } from './HeaderMenu'
import * as classes from './stylesheet'

type HeaderProps = {
  backHandler?: () => void
  pageName: string
}

export const Header: React.FC<HeaderProps> = ({ pageName, backHandler }) => {
  const { user } = useAuth()
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const { width } = useWindowDimensions()

  const userName = formatName(user.personal.name ?? ':)')

  const renderMenu = () => {
    if (width <= 820) {
      return (
        <>
          <div onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}>
            <MenuIcon isOpen={isMenuOpen} />
          </div>

          <HeaderMenu
            setIsAboutOpen={setIsAboutOpen}
            setIsAlertOpen={setIsAlertOpen}
            isOpen={isMenuOpen}
            userName={userName}
          />
        </>
      )
    }

    return (
      <>
        <div className={classes.headerUserName}>
          <P color="white">{`Olá, ${userName}!`}</P>
        </div>

        <div className={classes.headerIconGroup}>
          <div onClick={() => setIsAboutOpen(true)}>
            <QuestionIcon />
          </div>

          <div onClick={() => setIsAlertOpen(true)}>
            <LogoutIcon />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <header className={classes.header} data-testid="header">
        <div className={classes.headerLeft}>
          {backHandler && (
            <div className={classes.headerBackIcon} onClick={backHandler}>
              <BackIcon color="white" size="md" />
            </div>
          )}

          <div className={classes.headerPageName}>
            <H1 color="white">{pageName}</H1>
          </div>
        </div>

        <div className={classes.headerRight}>{renderMenu()}</div>
      </header>

      <Alert
        message="Você tem certeza de que quer fazer logout? Sua sessão será encerrada após confirmar."
        onCancel={
          /* istanbul ignore next */
          () => setIsAlertOpen(false)
        }
        title="Uma confirmação é necessária"
        onAction={authVar.logout}
        mode="actionAndCancel"
        isOpen={isAlertOpen}
        actionName="Logout"
        type="warning"
      />

      <About
        isOpen={isAboutOpen}
        dismissHandler={() => setIsAboutOpen(false)}
      />
    </>
  )
}
