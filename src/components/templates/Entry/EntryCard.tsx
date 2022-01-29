import { assignInlineVars } from '@vanilla-extract/dynamic'
import { useWindowDimensions } from '@/components/_hooks'
import { Background } from '@/components/atoms/Background'
import { Card } from '@/components/atoms/Card'
import { Menu } from '@/components/molecules/Menu'
import { Center } from '@/components/utils/Center'
import { LogoIcon } from '@/components/utils/icons'
import * as classes from './stylesheet'

export const EntryCard: React.FC = ({ children }) => {
  const { width, height } = useWindowDimensions()

  return (
    <Background gradient>
      <Center stickMobile>
        <Card roundness={width <= 520 ? 'none' : 'md'}>
          <div
            className={classes.entryCard}
            style={assignInlineVars(classes.windowDimensionVars, {
              height: `${height}px`
            })}
          >
            <header className={classes.entryCardHeader}>
              <LogoIcon />
            </header>

            <nav className={classes.entryCardMenuWrapper}>
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
        </Card>
      </Center>
    </Background>
  )
}
