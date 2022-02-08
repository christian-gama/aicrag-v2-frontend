import { ApolloError } from '@apollo/client'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { useEffect, useState } from 'react'
import { useWindowDimensions } from '@/components/_hooks'
import { windowHeightVars } from '@/components/_settings'
import { Background } from '@/components/atoms/Background'
import { Card } from '@/components/atoms/Card'
import { Steps } from '@/components/atoms/Steps'
import { Modal } from '@/components/molecules/Modal'
import { NavHeader } from '@/components/molecules/NavHeader'
import { Center } from '@/components/utils/Center'
import { P } from '@/components/utils/texts/P'
import { PinCode } from './PinCode'
import * as classes from './stylesheet'

type PinProps = (
  | {
    isPage: true
    to?: string
  }
  | {
    isPage?: false
    isOpen: boolean
  }
) & {
  submitHandler: (pin: string) => Promise<void>
  mailerHandler: () => Promise<void>
  currentStep?: number
  stepName: string
  error?: ApolloError
  dismissHandler?: () => void
}

export const Pin: React.FC<PinProps> = (props) => {
  const { height, width } = useWindowDimensions()
  const [isOpen, setIsOpen] = useState(props.isPage ? undefined : props.isOpen)
  const [currentStep, setCurrentStep] = useState(props.currentStep!)

  useEffect(() => {
    setIsOpen(props.isPage ? undefined : props.isOpen)
  }, [props.isPage, (props as any).isOpen])

  useEffect(() => {
    if (!isOpen) props.dismissHandler?.()
  }, [isOpen])

  useEffect(() => {
    setCurrentStep(1)
  }, [])

  if (isOpen === false) return null

  const Wrapper = props.isPage ? Background : Modal

  return (
    <Wrapper gradient isOpen onDismiss={props.dismissHandler}>
      <Center>
        <Card roundness={width <= 520 ? 'none' : 'md'}>
          <div
            style={assignInlineVars(windowHeightVars, {
              height: height <= 600 ? '600px' : `${height}px`
            })}
            className={classes.pin}
            data-testid="pin"
          >
            <NavHeader
              backHandler={props.isPage ? undefined : () => setIsOpen(false)}
              to={props.isPage ? props.to : ''}
              title="Confirme o seu email"
            />

            <div className={classes.pinContentWrapper}>
              <div className={classes.pinContentMain}>
                <div className={classes.pinContentSteps}>
                  <Steps
                    direction={width <= 520 ? 'row' : 'column'}
                    gap={width <= 520 ? '14rem' : '7.2rem'}
                    steps={[
                      { check: currentStep >= 1, label: props.stepName },
                      { check: currentStep >= 2, label: 'Confirmar email' }
                    ]}
                  />
                </div>

                <div className={classes.pinContentText}>
                  <P>
                    Foi enviado um código de validação para o seu email. O
                    código expirará em 15 minutos.
                  </P>
                </div>
              </div>

              <PinCode
                submitHandler={props.submitHandler}
                mailerHandler={props.mailerHandler}
                setStepsHandler={setCurrentStep}
                error={props.error}
              />
            </div>
          </div>
        </Card>
      </Center>
    </Wrapper>
  )
}

Pin.defaultProps = {
  currentStep: 0
}
