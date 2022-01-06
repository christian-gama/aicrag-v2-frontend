import React from 'react'
import P from '../../text/P'
import PopoverMessageListProps from './PopoverMessageList.model'
import * as style from './stylesheet'

const PopoverMessageList: React.FC<PopoverMessageListProps> = (props) => {
  const { messages } = props

  return (
    <ul className={style.list} data-testid="popover-list">
      {messages.map((message, index) => (
        <li key={index} className={style.listItem}>
          <P color="white">{message}</P>
        </li>
      ))}
    </ul>
  )
}

export default PopoverMessageList
