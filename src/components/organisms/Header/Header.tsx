import { useState } from 'react'
import { formatName } from '@/helpers'
import { getUserByToken } from '@/services/token/getUserByToken'
import { useWindowDimensions } from '@/components/_hooks'
import { Alert } from '@/components/molecules/Alert'
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
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const { width } = useWindowDimensions()

  const userName = formatName(getUserByToken('name')!)

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
