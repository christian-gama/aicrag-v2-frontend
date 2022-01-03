import React from 'react'
import P from '../../text/P'
import PopoverMessageListProps from './PopoverMessageList.model'
import { listStyle, unorderedListStyle } from './stylesheet'

const PopoverMessageList: React.FC<PopoverMessageListProps> = (props) => {
  const { messages } = props

  return (
    <ul className={unorderedListStyle} data-testid="popover-list">
      {messages.map((message, index) => (
        <li key={index} className={listStyle}>
          <P color="white">{message}</P>
        </li>
      ))}
    </ul>
  )
}

export default PopoverMessageList
