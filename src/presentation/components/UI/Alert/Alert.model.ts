import { HeaderVariants } from './stylesheet'

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
  type: HeaderVariants['color']
  onCancel?: () => void
} & (AlertWithAction | AlertWithoutAction)

export default AlertProps
