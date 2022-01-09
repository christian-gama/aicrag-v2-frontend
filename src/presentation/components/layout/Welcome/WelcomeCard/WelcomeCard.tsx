import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import Background from '@/presentation/components/UI/Background'
import Card from '@/presentation/components/UI/Card'
import LogoIcon from '@/presentation/components/UI/icons/LogoIcon'
import Menu from '@/presentation/components/UI/Menu'
import H2 from '@/presentation/components/UI/texts/H2'
import H4 from '@/presentation/components/UI/texts/H4'
import useWindowDimensions from '@/presentation/hooks/useWindowDimensions'
import * as style from './stylesheet'
import { dimensionVars } from './stylesheet'

const WelcomeCard: React.FC = (props) => {
  const { width, height } = useWindowDimensions()

  return (
    <Background gradient>
      <div className={style.welcomeWrapper}>
        <Card roundness={width <= 520 ? 'none' : 'sm'}>
          <div className={style.welcome} style={assignInlineVars(dimensionVars, { height: `${height}px` })}>
            <header className={style.welcomeHeader}>
              <LogoIcon />
              {width < 520 ? <H4>Boas-vindas ao Aicrag!</H4> : <H2>Boas-vindas ao Aicrag!</H2>}
            </header>

            <nav className={style.menuWrapper}>
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