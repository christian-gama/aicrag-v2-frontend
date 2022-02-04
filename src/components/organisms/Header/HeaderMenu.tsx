import { Dispatch, SetStateAction } from 'react'
import { LogoutIcon } from '@/components/utils/icons/LogoutIcon'
import { QuestionIcon } from '@/components/utils/icons/QuestionIcon'
import { P } from '@/components/utils/texts/P'
import * as classes from './stylesheet'

type HeaderMenuProps = {
  setIsAboutOpen: Dispatch<SetStateAction<boolean>>
  setIsAlertOpen: Dispatch<SetStateAction<boolean>>
  userName: string
  isOpen?: boolean
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({
  setIsAboutOpen,
  setIsAlertOpen,
  userName,
  isOpen
}) => {
  if (!isOpen) return null

  return (
    <ul className={classes.headerMenu} data-testid="header-menu">
      <li className={classes.headerMenuItem}>
        <P>{`Olá, ${userName}!`}</P>
      </li>

      <li
        onClick={() => setIsAboutOpen(true)}
        className={classes.headerMenuItem}
        data-testid="about-item"
      >
        <QuestionIcon color="secondary" />
        <P>Sobre</P>
      </li>

      <li
        onClick={() => setIsAlertOpen(true)}
        className={classes.headerMenuItem}
        data-testid="logout-item"
      >
        <LogoutIcon color="secondary" />
        <P>Logout</P>
      </li>
    </ul>
  )
}
