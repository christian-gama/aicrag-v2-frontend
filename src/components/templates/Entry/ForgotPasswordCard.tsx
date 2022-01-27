import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import { Link } from 'react-router-dom'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import Background from '@/components/atoms/Background'
import Card from '@/components/atoms/Card'
import Divider from '@/components/atoms/Divider'
import BackIcon from '@/components/atoms/icons/BackIcon'
import H2 from '@/components/atoms/texts/H2'
import H3 from '@/components/atoms/texts/H3'
import * as style from './stylesheet'

const ForgotPasswordCard: React.FC = ({ children }) => {
  const { width, height } = useWindowDimensions()

  return (
    <Background gradient>
      <div className={style.forgotPasswordWrapper}>
        <Card roundness={width <= 520 ? 'none' : 'sm'}>
          <div
            className={style.forgotPassword}
            style={assignInlineVars(style.windowDimensionVars, {
              height: `${height}px`
            })}
          >
            <header className={style.forgotPasswordHeader}>
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
      </div>
    </Background>
  )
}

export default ForgotPasswordCard
