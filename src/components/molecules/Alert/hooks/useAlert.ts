import { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import Alert from '../Alert'

const useAlert = (props: ComponentPropsWithoutRef<typeof Alert>) => {
  const [isOpen, setIsOpen] = useState(!!props.isOpen)

  useEffect(() => {
    setIsOpen(!!props.isOpen)
  }, [props.isOpen])

  /* istanbul ignore next */
  const handleAction = () => {
    if (props.mode === 'actionAndCancel') {
      props.onAction()

      setIsOpen(false)
    }
  }

  const cancelHandler = () => {
    if (props.onCancel) props.onCancel()

    setIsOpen(false)
  }

  return {
    cancelHandler,
    handleAction,
    isOpen
  }
}

export default useAlert
