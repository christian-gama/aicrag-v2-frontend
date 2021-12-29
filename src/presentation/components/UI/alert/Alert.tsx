import React, { useState, useEffect } from 'react'
import capitalize from '@/application/utils/capitalize'
import { ColorVariants } from '../../../styles/colorVariants.css'
import Button from '../button/Button'
import Card from '../card/Card'
import InfoCircleIcon from '../icons/infoCircleIcon/InfoCircleIcon'
import Modal from '../modal/Modal'
import H4 from '../text/h4/H4'
import P from '../text/p/P'
import { alertClasses, AlertVariants } from './Alert.css'

type AlertWithAction = {
  onAction: () => void
  actionName: string
  mode: 'actionAndCancel'
}

type AlertWithoutAction = { mode: 'cancelOnly' }

type AlertProps = {
  isOpen?: boolean
  message: string
  title: string
  type: AlertVariants['color']
  onCancel?: () => void
} & (AlertWithAction | AlertWithoutAction)

const Alert: React.FC<AlertProps> = (props) => {
  // Hooks
  const [isOpenState, setIsOpenState] = useState(false)

  useEffect(() => {
    setIsOpenState(!!props.isOpen)
  }, [props.isOpen])

  // Handlers
  const handleCancel = (): void => {
    if (props.onCancel) props.onCancel()

    setIsOpenState(false)
  }

  const handleAction =
    props.mode === 'actionAndCancel' && props.onAction
      ? (): void => {
          props.onAction()

          setIsOpenState(false)
        }
      : undefined

  // Styles
  const alertHeaderStyle = alertClasses.alertHeaderRecipe({
    color: props.type
  })

  const getTitleColor = (): keyof ColorVariants => {
    switch (props.type) {
      default:
        return 'danger'
    }
  }

  const getMessageColor = (): keyof ColorVariants => {
    switch (props.type) {
      default:
        return 'dangerDarker'
    }
  }

  return (
    <Modal isOpen={isOpenState} onDismiss={props.onCancel}>
      <Card centered>
        <div className={alertClasses.alertContainerStyle} data-testid="alert">
          <div className={alertHeaderStyle} data-testid="alert-header">
            <InfoCircleIcon color="danger" />
            <H4 color={getTitleColor()}>{capitalize(props.title)}</H4>
          </div>

          <div className={alertClasses.alertBodyStyle} data-testid="alert-body">
            <P color={getMessageColor()}>{capitalize(props.message)}</P>
          </div>

          <div className={alertClasses.alertFooterStyle} data-testid="alert-footer">
            <Button style={{ mode: 'text', size: 'sm' }} onClick={handleCancel} testid="alert-cancel-button">
              {props.mode === 'cancelOnly' ? 'OK' : 'Cancelar'}
            </Button>

            {props.mode === 'actionAndCancel' && (
              <Button onClick={handleAction} style={{ color: props.type, size: 'sm' }} testid="alert-action-button">
                {props.actionName}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </Modal>
  )
}

export default Alert
