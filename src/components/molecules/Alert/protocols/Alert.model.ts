import { AlertHeaderVariants } from '../stylesheet/Alert.css'

export type AlertWithAction = {
  actionName: string
  mode: 'actionAndCancel'
  onAction: () => void
}

export type AlertWithoutAction = { mode: 'cancelOnly' }

type AlertProps = {
  isOpen?: boolean
  message: string
  onCancel?: () => void
  title: string
  type: AlertHeaderVariants['color']
} & (AlertWithAction | AlertWithoutAction)

export default AlertProps
