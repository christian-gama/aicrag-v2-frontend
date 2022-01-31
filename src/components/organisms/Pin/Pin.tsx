import { assignInlineVars } from '@vanilla-extract/dynamic'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useWindowDimensions } from '@/components/_hooks'
import { windowHeightVars } from '@/components/_settings'
import { Card } from '@/components/atoms/Card'
import { Steps } from '@/components/atoms/Steps'
import { Center } from '@/components/utils/Center'
import { Divider } from '@/components/utils/Divider'
import { BackIcon } from '@/components/utils/icons'
import { H2 } from '@/components/utils/texts/H2'
import { P } from '@/components/utils/texts/P'
import { PinCode } from './PinCode'
import * as classes from './stylesheet'

type PinProps = (
  | {
    isPage: true
    to: string
  }
  | {
    isPage: false
    isOpen: boolean
  }
) & {
  currentStep?: number
}

export const Pin: React.FC<PinProps> = (props) => {
  const { height, width } = useWindowDimensions()
  const [isOpen, setIsOpen] = useState(props.isPage ? undefined : props.isOpen)
  const [currentStep, setCurrentStep] = useState(props.currentStep!)

  useEffect(() => {
    setCurrentStep(1)
  }, [])

  if (isOpen === false) return null

  return (
    <Center>
      <Card roundness={width <= 520 ? 'none' : 'md'}>
        <div
          style={assignInlineVars(windowHeightVars, {
            height: height <= 600 ? '600px' : `${height}px`
          })}
          className={classes.pin}
          data-testid="pin"
        >
          <div className={classes.pinHeader}>
            <div
              onClick={props.isPage ? undefined : () => setIsOpen(false)}
              data-testid="pin-back"
            >
              <Link to={props.isPage ? props.to : ''} aria-label="Voltar">
                <BackIcon />
              </Link>
            </div>

            <H2>Confirme o seu email</H2>
          </div>

          <Divider />

          <div className={classes.pinContentWrapper}>
            <div className={classes.pinContentMain}>
              <div className={classes.pinContentSteps}>
                <Steps
                  direction={width <= 520 ? 'row' : 'column'}
                  gap={width <= 520 ? '14rem' : '7.2rem'}
                  steps={[
                    { check: currentStep >= 1, label: 'Criar conta' },
                    { check: currentStep >= 2, label: 'Confirmar email' }
                  ]}
                />
              </div>

              <div className={classes.pinContentText}>
                <P>
                  Foi enviado um código de validação para o seu email. O código
                  expirará em 10 minutos.
                </P>
              </div>
            </div>

            <PinCode />
          </div>
        </div>
      </Card>
    </Center>
  )
}

Pin.defaultProps = {
  currentStep: 0
}
