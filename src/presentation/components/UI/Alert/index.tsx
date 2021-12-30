import React, { useState, useEffect } from 'react'
import capitalize from '@/application/utils/capitalize'
import Button from '../Button'
import Card from '../Card'
import InfoCircleIcon from '../icons/InfoCircleIcon'
import Modal from '../Modal'
import H4 from '../text/H4'
import P from '../text/P'
import { alertClasses } from './Alert.css'
import AlertProps from './Alert.model'
import handleAction from './handlers/actionHandler'
import cancelHandler from './handlers/cancelHandler'

const Alert: React.FC<AlertProps> = (props) => {
  // Hooks
  const [isOpenState, setIsOpenState] = useState(false)

  useEffect(() => {
    setIsOpenState(!!props.isOpen)
  }, [props.isOpen])

  const alertHeaderStyle = alertClasses.headerRecipe({
    color: props.type
  })

  return (
    <Modal isOpen={isOpenState} onDismiss={props.onCancel}>
      <Card centered>
        <div className={alertClasses.containerStyle} data-testid="alert">
          <div className={alertHeaderStyle} data-testid="alert-header">
            <InfoCircleIcon color="danger" />
            <H4 color={props.type}>{capitalize(props.title)}</H4>
          </div>

          <div className={alertClasses.bodyStyle} data-testid="alert-body">
            <P>{capitalize(props.message)}</P>
          </div>

          <div className={alertClasses.footerStyle} data-testid="alert-footer">
            <Button
              onClick={() => cancelHandler({ setIsOpenState, onCancel: props.onCancel })}
              style={{ mode: 'text', size: 'sm' }}
              testid="alert-cancel-button"
            >
              {props.mode === 'cancelOnly' ? 'Voltar' : 'Cancelar'}
            </Button>

            {props.mode === 'actionAndCancel' && (
              <Button
                onClick={() => handleAction({ setIsOpenState, onAction: props.onAction, mode: props.mode })}
                style={{ color: props.type, size: 'sm' }}
                testid="alert-action-button"
              >
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
