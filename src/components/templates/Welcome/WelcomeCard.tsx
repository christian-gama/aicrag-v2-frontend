import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import Background from '@/components/atoms/Background'
import Card from '@/components/atoms/Card'
import LogoIcon from '@/components/atoms/icons/LogoIcon'
import H2 from '@/components/atoms/texts/H2'
import H4 from '@/components/atoms/texts/H4'
import Menu from '@/components/molecules/Menu'
import * as style from './stylesheet'

const WelcomeCard: React.FC = (props) => {
  const { width, height } = useWindowDimensions()

  return (
    <Background gradient>
      <div className={style.welcomeCardWrapper}>
        <Card roundness={width <= 520 ? 'none' : 'sm'}>
          <div
            className={style.welcomeCard}
            style={assignInlineVars(style.windowDimensionVars, { height: `${height}px` })}
          >
            <header className={style.welcomeCardHeader}>
              <LogoIcon />
              {width < 520 ? <H4>Boas-vindas ao Aicrag!</H4> : <H2>Boas-vindas ao Aicrag!</H2>}
            </header>

            <nav className={style.welcomeCardMenuWrapper}>
              <Menu buttons={['Entrar', 'Cadastrar']} url="/boas-vindas/" />
            </nav>

            <main>{props.children}</main>
          </div>
        </Card>
      </div>
    </Background>
  )
}

export default WelcomeCard
