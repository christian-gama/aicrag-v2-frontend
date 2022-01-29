import { assignInlineVars } from '@vanilla-extract/dynamic'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { getDuration } from '@/helpers'
import {
  CheckCircleIcon,
  ErrorIcon,
  InfoCircleIcon
} from '@/components/utils/icons'
import { CloseIcon } from '@/components/utils/icons/CloseIcon'
import { P } from '@/components/utils/texts/P'
import { PopoverMessageList } from './PopoverMessageList'
import { PopoverVariants } from './stylesheet'
import * as classes from './stylesheet'

type PopoverProps = {
  type: PopoverVariants['type']
  message: string | string[]
  minDuration?: number
  onClose?: () => void
  duration?: number
  isOpen?: boolean
}

export const Popover: React.FC<PopoverProps> = ({
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

  const popoverStyle = classes.popoverRecipe({
    type
  })

  const progressBarStyle = classes.progressBarRecipe({
    type
  })

  const progressBarWrapperStyle = classes.progressBarWrapperRecipe({
    type
  })

  if (!isOpenState) return null

  const overlayRoot = document.getElementById('overlay-root') as HTMLElement

  return ReactDOM.createPortal(
    <div
      style={assignInlineVars(classes.popoverVars, {
        duration: `${duration}s`
      })}
      className={popoverStyle}
      data-testid="popover"
    >
      <div className={classes.popoverContent}>
        <div className={classes.popoverTextWrapper}>
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
          className={classes.popoverButtonWrapper}
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
