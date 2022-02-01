import { ComponentPropsWithoutRef, useState, useEffect } from 'react'
import { Alert } from '..'

export const useAlert = (props: ComponentPropsWithoutRef<typeof Alert>) => {
  const [isOpen, setIsOpen] = useState(!!props.isOpen)

  useEffect(() => {
    setIsOpen(!!props.isOpen)
  }, [props.isOpen])

  const handleAction = () => {
    // @ts-expect-error
    props.onAction()

    setIsOpen(false)
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
