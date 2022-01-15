import React from 'react'
import P from '@/components/atoms/texts/P'
import * as style from './stylesheet'

type PopoverMessageListProps = {
  messages: string[]
}

const PopoverMessageList: React.FC<PopoverMessageListProps> = (props) => {
  const { messages } = props

  return (
    <ul className={style.popoverMessageList} data-testid="popover-list">
      {messages.map((message, index) => (
        <li key={index} className={style.popoverMessageListItem}>
          <P color="white">{message}</P>
        </li>
      ))}
    </ul>
  )
}

export default PopoverMessageList
