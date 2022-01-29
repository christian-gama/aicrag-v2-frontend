import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import { Link } from 'react-router-dom'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import Background from '@/components/atoms/Background'
import Card from '@/components/atoms/Card'
import Center from '@/components/utils/Center'
import Divider from '@/components/utils/Divider'
import BackIcon from '@/components/utils/icons/BackIcon'
import H2 from '@/components/utils/texts/H2'
import H3 from '@/components/utils/texts/H3'
import * as style from './stylesheet'

const ForgotPasswordCard: React.FC = ({ children }) => {
  const { width, height } = useWindowDimensions()

  return (
    <Background gradient>
      <Center stickMobile>
        <Card roundness={width <= 520 ? 'none' : 'md'}>
          <div
            className={style.forgotPasswordCard}
            style={assignInlineVars(style.windowDimensionVars, {
              height: `${height}px`
            })}
          >
            <header className={style.forgotPasswordCardHeader}>
              <nav>
                <Link to="/entry/sign-in" aria-label="Voltar">
                  <BackIcon />
                </Link>
              </nav>

              <div>
                {width <= 520
                  ? (
                  <H3>Esqueceu sua senha?</H3>
                    )
                  : (
                  <H2>Esqueceu sua senha?</H2>
                    )}
              </div>
            </header>

            <Divider />

            <main>{children}</main>
          </div>
        </Card>
      </Center>
    </Background>
  )
}

export default ForgotPasswordCard
