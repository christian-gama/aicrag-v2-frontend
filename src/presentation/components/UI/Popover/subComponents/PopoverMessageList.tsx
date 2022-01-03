import React from 'react'
import P from '../../text/P'
import PopoverMessageListProps from './PopoverMessageList.model'
import { popoverMessageListClasses } from './stylesheet/PopoverMessageList.css'

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
