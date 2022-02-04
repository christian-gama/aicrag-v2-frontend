import { calendarActions, CalendarStates } from '@/context/models/calendar'
import { FormContext } from '@/context/models/form'
import { AppDispatch, RootState } from '@/context/store'
import { DateTime } from 'luxon'
import { ComponentPropsWithRef, useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ControlDateInput } from '..'

type ControlDateInputProps = ComponentPropsWithRef<typeof ControlDateInput>

type UseControlDateInput = {
  defaultDate: ControlDateInputProps['defaultDate']
  autoFocus: ControlDateInputProps['autoFocus']
  name: ControlDateInputProps['name']
}

export const useControlDateInput = ({
  defaultDate,
  autoFocus,
  name
}: UseControlDateInput) => {
  const reduxDispatch = useDispatch<AppDispatch>()
  const { selectedDate } = useSelector<RootState, CalendarStates>(
    (state) => state.calendar
  )
  const { openCalendar } = calendarActions

  const { dispatch, state } = useContext(FormContext)

  const { isResetting } = state.form
  const { isFocused, value } = state.input

  useEffect(() => {
    dispatch({
      type: 'INPUT/SET_CURRENT_TYPE',
      payload: { currentType: { [name]: 'text' } }
    })
    dispatch({
      type: 'INPUT/SET_ERROR',
      payload: { error: { [name]: undefined } }
    })
    dispatch({
      type: 'INPUT/SET_IS_FOCUSED',
      payload: { isFocused: { [name]: !!autoFocus } }
    })
    dispatch({
      type: 'INPUT/SET_IS_TOUCHED',
      payload: { isTouched: { [name]: false } }
    })
    dispatch({
      type: 'INPUT/SET_IS_VALID',
      payload: { isValid: { [name]: true } }
    })
    dispatch({
      type: 'INPUT/SET_VALUE',
      payload: {
        value: {
          [name]: DateTime.fromMillis(defaultDate!).toFormat('dd/MM/yyyy HH:mm')
        }
      }
    })
  }, [isResetting])

  useEffect(() => {
    dispatch({
      type: 'FORM/SET_FORM_DATA',
      payload: { data: { [name]: new Date(defaultDate!).toISOString()! } }
    })
  }, [isResetting])

  useEffect(() => {
    const value = DateTime.fromMillis(selectedDate).toFormat('dd/MM/yyyy HH:mm')

    dispatch({
      type: 'FORM/SET_FORM_DATA',
      payload: { data: { [name]: new Date(selectedDate).toISOString()! } }
    })
    dispatch({
      type: 'INPUT/SET_VALUE',
      payload: { value: { [name]: value } }
    })
  }, [selectedDate])

  const onBlurHandler = () => {
    dispatch({
      type: 'INPUT/SET_IS_FOCUSED',
      payload: { isFocused: { [name]: false } }
    })
    dispatch({
      type: 'INPUT/SET_IS_TOUCHED',
      payload: { isTouched: { [name]: true } }
    })
  }

  const onFocusHandler = () => {
    dispatch({
      type: 'INPUT/SET_IS_FOCUSED',
      payload: { isFocused: { [name]: true } }
    })

    reduxDispatch(openCalendar())
  }

  return {
    onFocusHandler,
    onBlurHandler,
    isFocused,
    value
  }
}
