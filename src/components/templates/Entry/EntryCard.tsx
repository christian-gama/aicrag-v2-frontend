import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import Background from '@/components/atoms/Background'
import Card from '@/components/atoms/Card'
import Menu from '@/components/molecules/Menu'
import Center from '@/components/utils/Center'
import LogoIcon from '@/components/utils/icons/LogoIcon'
import * as style from './stylesheet'

const EntryCard: React.FC = ({ children }) => {
  const { width, height } = useWindowDimensions()

  return (
    <Background gradient>
      <Center stickMobile>
        <Card roundness={width <= 520 ? 'none' : 'md'}>
          <div
            className={style.entryCard}
            style={assignInlineVars(style.windowDimensionVars, {
              height: `${height}px`
            })}
          >
            <header className={style.entryCardHeader}>
              <LogoIcon />
            </header>

            <nav className={style.entryCardMenuWrapper}>
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

export default EntryCard
