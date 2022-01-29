import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import Background from '@/components/atoms/Background'
import Card from '@/components/atoms/Card'
import Center from '@/components/utils/Center'
import Divider from '@/components/utils/Divider'
import H2 from '@/components/utils/texts/H2'
import H3 from '@/components/utils/texts/H3'
import * as style from './stylesheet'

const ResetPasswordCard: React.FC = ({ children }) => {
  const { width, height } = useWindowDimensions()

  return (
    <Background gradient>
      <Center stickMobile>
        <Card roundness={width <= 520 ? 'none' : 'md'}>
          <div
            className={style.resetPasswordCard}
            style={assignInlineVars(style.windowDimensionVars, {
              height: `${height}px`
            })}
          >
            <header className={style.resetPasswordCardHeader}>
              <div>
                {width <= 520
                  ? (
                  <H3>Resete a sua senha</H3>
                    )
                  : (
                  <H2>Resete a sua senha</H2>
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

export default ResetPasswordCard
