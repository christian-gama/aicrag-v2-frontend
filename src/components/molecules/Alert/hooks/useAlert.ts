import { useEffect, useState } from 'react'
import AlertProps from '../protocols/Alert.model'

const useAlert = (props: AlertProps) => {
  const [isOpen, setIsOpen] = useState(!!props.isOpen)

  useEffect(() => {
    setIsOpen(!!props.isOpen)
  }, [props.isOpen])

  /* istanbul ignore next */
  const handleAction = () => {
    if (props.mode === 'actionAndCancel') {
      props.onAction()
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
