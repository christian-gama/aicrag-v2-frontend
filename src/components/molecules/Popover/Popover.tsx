import { assignInlineVars } from '@vanilla-extract/dynamic'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import getDuration from '../../../helpers/getDuration'
import CheckCircleIcon from '../../utils/icons/CheckCircleIcon'
import CloseIcon from '../../utils/icons/CloseIcon'
import ErrorIcon from '../../utils/icons/ErrorIcon'
import InfoCircleIcon from '../../utils/icons/InfoCircleIcon'
import P from '../../utils/texts/P'
import PopoverMessageList from './PopoverMessageList'
import * as style from './stylesheet'
import { PopoverVariants } from './stylesheet'

type PopoverProps = {
  type: PopoverVariants['type']
  message: string | string[]
  minDuration?: number
  onClose?: () => void
  duration?: number
  isOpen?: boolean
}

const Popover: React.FC<PopoverProps> = ({
  minDuration = 3,
  message,
  isOpen,
  onClose,
  type,
  duration = getDuration(message, minDuration)
}) => {
  const [isOpenState, setIsOpenState] = useState(!!isOpen)

  useEffect(() => {
    setIsOpenState(!!isOpen)
  }, [isOpen])

  useEffect(() => {
    if (isOpenState) {
      const timer = setTimeout(() => {
        setIsOpenState(false)

        if (onClose) onClose()
      }, duration * 1000)

      return () => clearTimeout(timer)
    }
  }, [isOpenState])

  const renderIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon color="white" size="md" />
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

  if (!isOpenState) return null

  const overlayRoot = document.getElementById('overlay-root') as HTMLElement

  return ReactDOM.createPortal(
    <div
      style={assignInlineVars(style.popoverVars, { duration: `${duration}s` })}
      className={popoverStyle}
      data-testid="popover"
    >
      <div className={style.popoverContent}>
        <div className={style.popoverTextWrapper}>
          {renderIcon()}
          {Array.isArray(message)
            ? (
            <PopoverMessageList messages={message} />
              )
            : (
            <P color="white">{message}</P>
              )}
        </div>

        <div
          className={style.popoverButtonWrapper}
          onClick={() => {
            if (onClose) onClose()
            setIsOpenState(false)
          }}
          data-testid="popover-close-wrapper"
        >
          <CloseIcon color="white" size="sm" />
        </div>
      </div>

      <div
        className={progressBarWrapperStyle}
        data-testid="popover-progress-bar-wrapper"
      >
        <div className={progressBarStyle} data-testid="popover-progress-bar" />
      </div>
    </div>,

    overlayRoot
  )
}

export default Popover
