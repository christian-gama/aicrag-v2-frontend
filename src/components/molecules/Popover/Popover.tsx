import { assignInlineVars } from '@vanilla-extract/dynamic'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import getDuration from '../../../helpers/getDuration'
import CheckIcon from '../../atoms/icons/CheckCircleIcon'
import CloseIcon from '../../atoms/icons/CloseIcon'
import ErrorIcon from '../../atoms/icons/ErrorIcon'
import InfoCircleIcon from '../../atoms/icons/InfoCircleIcon'
import P from '../../atoms/texts/P'
import PopoverMessageList from './PopoverMessageList'
import PopoverProps from './protocols/Popover.model'
import * as style from './stylesheet'

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

        if (props.onClose) props.onClose()
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

  const popoverStyle = style.popoverRecipe({
    type
  })

  const progressBarStyle = style.progressBarRecipe({
    type
  })

  const progressBarWrapperStyle = style.progressBarWrapperRecipe({
    type
  })

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div
      className={popoverStyle}
      style={assignInlineVars(style.popoverVars, { duration: `${duration}s` })}
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
    </div>,

    document.querySelector('#overlay-root') as HTMLElement
  )
}

export default Popover
