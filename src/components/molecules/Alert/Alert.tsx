import capitalize from '@/helpers/capitalize'
import React, { useEffect, useState } from 'react'
import { FillColorVariants } from '@/components/_settings/variants.css'
import { ButtonVariants } from '@/components/atoms/Button/stylesheet'
import Button from '../../atoms/Button'
import Card from '../../atoms/Card'
import InfoCircleIcon from '../../atoms/icons/InfoCircleIcon'
import H4 from '../../atoms/texts/H4'
import P from '../../atoms/texts/P'
import Modal from '../Modal'
import handleAction from './methods/actionHandler'
import cancelHandler from './methods/cancelHandler'
import AlertProps from './protocols/Alert.model'
import * as style from './stylesheet'

const Alert: React.FC<AlertProps> = (props) => {
  const [isOpen, setIsOpen] = useState(!!props.isOpen)

  useEffect(() => {
    setIsOpen(!!props.isOpen)
  }, [props.isOpen])

  const alertHeaderStyle = style.alertHeaderRecipe({
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

      case 'danger':
        return 'danger'

      default:
        return 'cyan'
    }
  }

  return (
    <Modal isOpen={isOpen} onDismiss={props.onCancel}>
      <Card>
        <div className={style.alert} data-testid="alert">
          <div className={alertHeaderStyle} data-testid="alert-header">
            <InfoCircleIcon color={getIconColor()} />
            <H4 color={getIconColor()}>{capitalize(props.title)}</H4>
          </div>

          <div className={style.alertBody} data-testid="alert-body">
            <P>{capitalize(props.message)}</P>
          </div>

          <div className={style.alertFooter} data-testid="alert-footer">
            <Button
              onClick={() => cancelHandler({ onCancel: props.onCancel, setIsOpen })}
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
