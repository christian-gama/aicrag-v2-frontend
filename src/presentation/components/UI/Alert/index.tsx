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
import handleAction from './methods/actionHandler'
import cancelHandler from './methods/cancelHandler'

const Alert: React.FC<AlertProps> = (props) => {
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
        <div className={alertClasses.wrapperStyle} data-testid="alert">
          <div className={alertHeaderStyle} data-testid="alert-header">
            <InfoCircleIcon color={props.type} />
            <H4 color={props.type}>{capitalize(props.title)}</H4>
          </div>

          <div className={alertClasses.bodyStyle} data-testid="alert-body">
            <P>{capitalize(props.message)}</P>
          </div>

          <div className={alertClasses.footerStyle} data-testid="alert-footer">
            <Button
              onClick={() => cancelHandler({ setIsOpenState, onCancel: props.onCancel })}
              style={{ mode: 'outlined', size: 'sm', color: props.type }}
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
