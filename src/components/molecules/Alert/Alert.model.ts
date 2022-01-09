import { HeaderVariants } from './stylesheet'

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
  type: HeaderVariants['color']
} & (AlertWithAction | AlertWithoutAction)

export default AlertProps
