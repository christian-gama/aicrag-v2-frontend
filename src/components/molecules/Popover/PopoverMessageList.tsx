import { P } from '@/components/utils/texts/P'
import * as classes from './stylesheet'

type PopoverMessageListProps = {
  messages: string[]
}

export const PopoverMessageList: React.FC<PopoverMessageListProps> = (
  props
) => {
  const { messages } = props

  return (
    <ul className={classes.popoverMessageList} data-testid="popover-list">
      {messages.map((message, index) => (
        <li key={index} className={classes.popoverMessageListItem}>
          <P color="white">{message}</P>
        </li>
      ))}
    </ul>
  )
}
