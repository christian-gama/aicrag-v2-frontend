import React from 'react'
import P from '@/components/atoms/texts/P'
import PopoverMessageListProps from './protocols/PopoverMessageList.model'
import * as style from './stylesheet'

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
