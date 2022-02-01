import { makeVar, useReactiveVar } from '@apollo/client'

type InitialValue = (
  | {
    isOpen: true
    message: string
  }
  | {
    isOpen: false
    message: null
  }
) & {
  type: 'error' | 'success' | 'info'
  onClose?: () => void
}

const initialValue: InitialValue = {
  onClose: undefined,
  isOpen: false,
  message: null,
  type: 'error'
}

const _popoverVar = makeVar(initialValue as InitialValue)

export const popoverVar = {
  message: _popoverVar().message,
  onClose: _popoverVar().onClose,
  isOpen: _popoverVar().isOpen,
  type: _popoverVar().type,

  reset: () => _popoverVar({ isOpen: false, message: null } as InitialValue),

  setPopover: (
    message: string,
    type: InitialValue['type'],
    onClose?: VoidFunction
  ) => {
    if (_popoverVar().isOpen) {
      _popoverVar({ isOpen: false, message: null } as InitialValue)
    }

    _popoverVar({ isOpen: true, message, type, onClose } as InitialValue)
  }
}

export const usePopoverVar = () => useReactiveVar(_popoverVar)
