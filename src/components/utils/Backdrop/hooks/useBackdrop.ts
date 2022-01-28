import { useState, useEffect, ComponentPropsWithoutRef } from 'react'
import Backdrop from '../Backdrop'

const useBackdrop = (props: ComponentPropsWithoutRef<typeof Backdrop>) => {
  const [isOpenState, setIsOpenState] = useState(false)

  useEffect(() => {
    setIsOpenState(!!props.isOpen)
  }, [props.isOpen])

  useEffect(() => {
    function removeListener () {
      document.removeEventListener('keydown', dismissOnEscapeHandler)
    }

    function dismissOnEscapeHandler (event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (props.onDismiss) props.onDismiss()

        removeListener()
        setIsOpenState(false)
      }
    }

    if (isOpenState) {
      document.addEventListener('keydown', dismissOnEscapeHandler)
    }

    return removeListener
  }, [isOpenState])

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
