import React from 'react'
import P from '../../text/P'
import { popoverMessageListClasses } from './PopoverMessageList.css'
import PopoverMessageListProps from './PopoverMessageList.model'

const PopoverMessageList: React.FC<PopoverMessageListProps> = (props) => {
  const { messages } = props

  return (
    <ul className={popoverMessageListClasses.ulStyle} data-testid="popover-list">
      {messages.map((message, index) => (
        <li key={index} className={popoverMessageListClasses.liStyle}>
          <P color="white">{message}</P>
        </li>
      ))}
    </ul>
  )
}

export default PopoverMessageList
