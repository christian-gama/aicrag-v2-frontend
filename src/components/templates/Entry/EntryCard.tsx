import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import Background from '@/components/atoms/Background'
import Card from '@/components/atoms/Card'
import LogoIcon from '@/components/atoms/icons/LogoIcon'
import Menu from '@/components/molecules/Menu'
import * as style from './stylesheet'

const EntryCard: React.FC = (props) => {
  const { width, height } = useWindowDimensions()

  return (
    <Background gradient>
      <div className={style.entryCardWrapper} data-testid="entry-card">
        <Card roundness={width <= 520 ? 'none' : 'sm'}>
          <div
            className={style.entryCard}
            style={assignInlineVars(style.windowDimensionVars, { height: `${height}px` })}
          >
            <header className={style.entryCardHeader}>
              <LogoIcon />
            </header>

            <nav className={style.entryCardMenuWrapper}>
              <Menu
                buttons={[
                  { buttonName: 'Entrar', to: 'sign-in' },
                  { buttonName: 'Cadastrar', to: 'sign-up' }
                ]}
                url="/entry/"
              />
            </nav>

            <main>{props.children}</main>
          </div>
        </Card>
      </div>
    </Background>
  )
}

export default EntryCard
