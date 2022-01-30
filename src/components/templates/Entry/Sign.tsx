import { Menu } from '@/components/molecules/Menu'
import { LogoIcon } from '@/components/utils/icons'
import { EntryCard } from './EntryCard'
import * as classes from './stylesheet'

export const Sign: React.FC = ({ children }) => {
  return (
    <EntryCard>
      <div className={classes.signWrapper}>
        <header className={classes.signHeader}>
          <LogoIcon />
        </header>

        <nav className={classes.signMenuWrapper}>
          <Menu
            buttons={[
              {
                buttonName: 'Entrar',
                to: '/entry/sign-in'
              },
              {
                buttonName: 'Cadastrar',
                to: '/entry/sign-up'
              }
            ]}
          />
        </nav>

        <main>{children}</main>
      </div>
    </EntryCard>
  )
}
