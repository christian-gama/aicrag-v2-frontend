import { AlertVariants } from '@/presentation/components/UI/Alert/Alert.css'

export type AlertWithAction = {
  onAction: () => void
  actionName: string
  mode: 'actionAndCancel'
}

export type AlertWithoutAction = { mode: 'cancelOnly' }

type AlertProps = {
  isOpen?: boolean
  message: string
  title: string
  type: AlertVariants['color']
  onCancel?: () => void
} & (AlertWithAction | AlertWithoutAction)

export default AlertProps
