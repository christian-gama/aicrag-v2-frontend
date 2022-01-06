import { assignInlineVars } from '@vanilla-extract/dynamic'
import React, { useEffect, useState } from 'react'
import CheckIcon from '../icons/CheckIcon'
import CloseIcon from '../icons/CloseIcon'
import ErrorIcon from '../icons/ErrorIcon'
import InfoCircleIcon from '../icons/InfoCircleIcon'
import P from '../texts/P'
import getDuration from './methods/getDuration'
import PopoverProps from './Popover.model'
import * as style from './stylesheet'
import { progressBarRecipe, progressBarWrapperRecipe, popoverVars } from './stylesheet/recipes'
import { popoverRecipe } from './stylesheet/recipes/popoverRecipe.css'
import PopoverMessageList from './subComponents/PopoverMessageList'

const Popover: React.FC<PopoverProps> = (props) => {
  const { message, type } = props
  const duration = props.duration ?? getDuration(message)

  const [isOpen, setIsOpen] = useState(!!props.isOpen)

  useEffect(() => {
    setIsOpen(!!props.isOpen)
  }, [props.isOpen])

  useEffect(() => {
    if (props.isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false)
      }, duration * 1000)

      return () => clearTimeout(timer)
    }
  }, [props.isOpen])

  const renderIcon = () => {
    switch (type) {
      case 'success':
        return <CheckIcon color="white" size="md" />
      case 'error':
        return <ErrorIcon color="white" size="md" />
      case 'info':
        return <InfoCircleIcon color="white" size="md" />
    }
  }

  const popoverStyle = popoverRecipe({
    type
  })

  const progressBarStyle = progressBarRecipe({
    type
  })

  const progressBarWrapperStyle = progressBarWrapperRecipe({
    type
  })

  if (!isOpen) return null

  return (
    <div
      className={popoverStyle}
      style={assignInlineVars(popoverVars, { duration: `${duration}s` })}
      data-testid="popover"
    >
      <div className={style.popoverContent}>
        <div className={style.popoverTextWrapper}>
          {renderIcon()}
          {Array.isArray(message) ? <PopoverMessageList messages={message} /> : <P color="white">{message}</P>}
        </div>

        <div
          className={style.popoverButtonWrapper}
          onClick={() => setIsOpen(false)}
          data-testid="popover-close-wrapper"
        >
          <CloseIcon color="white" size="sm" />
        </div>
      </div>

      <div className={progressBarWrapperStyle} data-testid="popover-progress-bar-wrapper">
        <div className={progressBarStyle} data-testid="popover-progress-bar" />
      </div>
    </div>
  )
}

export default Popover
