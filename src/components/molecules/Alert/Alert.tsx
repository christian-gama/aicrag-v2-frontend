import capitalize from '@/helpers/capitalize'
import React from 'react'
import { FillColorVariants } from '@/components/_settings/variants.css'
import { ButtonVariants } from '@/components/atoms/Button/stylesheet'
import Button from '../../atoms/Button'
import Card from '../../atoms/Card'
import InfoCircleIcon from '../../atoms/icons/InfoCircleIcon'
import H4 from '../../atoms/texts/H4'
import P from '../../atoms/texts/P'
import Modal from '../Modal'
import useAlert from './hooks/useAlert'
import * as style from './stylesheet'
import { AlertHeaderVariants } from './stylesheet'

type AlertProps = {
  isOpen?: boolean
  message: string
  onCancel?: () => void
  title: string
  type: AlertHeaderVariants['color']
} & (AlertWithAction | AlertWithoutAction)

const Alert: React.FC<AlertProps> = (props) => {
  const mode = props.mode || 'cancelOnly'
  const { cancelHandler, handleAction, isOpen } = useAlert(props)

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
        return 'textDarker'
    }
  }

  const getButtonColor = (): ButtonVariants['color'] => {
    switch (props.type) {
      case 'info':
        return 'info'

      case 'danger':
        return 'danger'

      default:
        return 'warning'
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
              onClick={cancelHandler}
              style={{ mode: 'outlined', size: 'sm', color: mode === 'cancelOnly' ? getButtonColor() : 'light' }}
              testid="alert-cancel-button"
            >
              {mode === 'cancelOnly' ? 'Voltar' : 'Cancelar'}
            </Button>

            {props.mode === 'actionAndCancel' && (
              <Button
                onClick={handleAction}
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

type AlertWithAction = {
  actionName: string
  mode: 'actionAndCancel'
  onAction: () => void
}
type AlertWithoutAction = { mode: 'cancelOnly' }
