import React from 'react'
import { FillColorVariants } from '@/application/common/stylesheet/variants/fillColor.css'
import capitalize from '@/application/utils/capitalize'
import Button from '../Button/Button'
import { ButtonVariants } from '../Button/stylesheet'
import Card from '../Card/Card'
import InfoCircleIcon from '../icons/InfoCircleIcon'
import Modal from '../Modal/Modal'
import H4 from '../text/H4'
import P from '../text/P'
import AlertProps from './Alert.model'
import handleAction from './methods/actionHandler'
import cancelHandler from './methods/cancelHandler'
import { headerRecipe, wrapperStyle, bodyStyle, footerStyle } from './stylesheet'

const Alert: React.FC<AlertProps> = (props) => {
  const alertHeaderStyle = headerRecipe({
    color: props.type
  })

  const getIconColor = (): keyof FillColorVariants => {
    switch (props.type) {
      case 'info':
        return 'info'

      case 'danger':
        return 'danger'

      default:
        return 'dark'
    }
  }

  const getButtonColor = (): ButtonVariants['color'] => {
    switch (props.type) {
      case 'info':
        return 'info'

      case 'default':
        return 'main'

      case 'danger':
        return 'danger'
    }
  }

  return (
    <Modal isOpen={props.isOpen} onDismiss={props.onCancel}>
      <Card centered>
        <div className={wrapperStyle} data-testid="alert">
          <div className={alertHeaderStyle} data-testid="alert-header">
            <InfoCircleIcon color={getIconColor()} />
            <H4 color={getIconColor()}>{capitalize(props.title)}</H4>
          </div>

          <div className={bodyStyle} data-testid="alert-body">
            <P>{capitalize(props.message)}</P>
          </div>

          <div className={footerStyle} data-testid="alert-footer">
            <Button
              onClick={() => cancelHandler({ onCancel: props.onCancel })}
              style={{ mode: 'outlined', size: 'sm', color: getButtonColor() }}
              testid="alert-cancel-button"
            >
              {props.mode === 'cancelOnly' ? 'Voltar' : 'Cancelar'}
            </Button>

            {props.mode === 'actionAndCancel' && (
              <Button
                onClick={() => handleAction({ onAction: props.onAction, mode: props.mode })}
                style={{ color: getButtonColor(), size: 'sm' }}
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
