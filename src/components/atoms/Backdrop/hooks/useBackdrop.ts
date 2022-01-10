import { useState, useEffect } from 'react'
import BackdropProps from '../protocols/Backdrop.model'

const useBackdrop = (props: BackdropProps) => {
  const [isOpenState, setIsOpenState] = useState(false)

  useEffect(() => {
    setIsOpenState(!!props.isOpen)
  }, [props.isOpen])

  useEffect(() => {
    const dismissOnEscapeHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (props.onDismiss) props.onDismiss()

        setIsOpenState(false)
      }
    }

    document.addEventListener('keydown', dismissOnEscapeHandler)

    return () => {
      document.removeEventListener('keydown', dismissOnEscapeHandler)
    }
  }, [])

  const dismissOnClickHandler = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      if (props.onDismiss) props.onDismiss()

      setIsOpenState(false)
    }
  }

  return {
    isOpenState,
    dismissOnClickHandler
  }
}

export default useBackdrop
