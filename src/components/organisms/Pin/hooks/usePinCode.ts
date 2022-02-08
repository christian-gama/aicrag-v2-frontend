import {
  MailerCountdownStates,
  mailerCountdownActions
} from '@/context/models/mailerCountdown'
import { AppDispatch, RootState } from '@/context/store'
import { Maybe } from '@/helpers'
import { createFilledArray } from '@/helpers/createFilledArray'
import { ApolloError } from '@apollo/client'
import {
  ComponentPropsWithRef,
  FocusEvent,
  FormEvent,
  MouseEvent,
  useEffect,
  useState
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PinCode } from '..'

export const usePinCode = ({
  setStepsHandler,
  mailerHandler,
  submitHandler,
  error
}: ComponentPropsWithRef<typeof PinCode>) => {
  const [formState, setFormState] = useState({
    isLoading: {
      submitHandler: false,
      mailerHandler: false
    },
    isSubmitted: false
  })
  const [inputError, setInputError] = useState<Maybe<ApolloError>>()
  const [values, setValues] = useState(createFilledArray(5, ''))

  const dispatch = useDispatch<AppDispatch>()
  const { isOnCountdown, timeLeftInSeconds } = useSelector<
  RootState,
  MailerCountdownStates
  >((state) => state.mailerCountdown)
  const { startCountdown } = mailerCountdownActions

  const form = document.querySelector('form') as HTMLFormElement
  const getInput = (index: number) =>
    document.querySelector(`input[data-index="${index}"]`) as HTMLElement

  const onChangeHandler = (value: string, index: number) => {
    if (value.length >= 5) {
      return setValues(values.map((_, i) => value.split('')[i]))
    }

    if (value.length <= 2) {
      const lastChar = value.charAt(value.length - 1)
      setValues(values.map((v, i) => (i === index ? lastChar : v)))

      if (index < 4 && value !== '') {
        getInput(index + 1).focus()
      }
    }
  }

  const inputNavigation = (index: number, key: string) => {
    if (index < 4) {
      if (key === 'ArrowRight' || key === 'Delete') {
        getInput(index + 1).focus()
      }
    }

    if (index > 0) {
      if (key === 'ArrowLeft') {
        getInput(index - 1).focus()
      }

      if (key === 'Backspace' && values[index] === '') {
        getInput(index - 1).focus()
      }
    }
  }

  const onKeyPressHandler = (key: string, index: number) => {
    if (key === 'Backspace' || key === 'Delete') {
      setValues((prev) => prev.map((v, i) => (i === index ? '' : v)))
    }

    if (key === 'Backspace' && values[index] === '') {
      setValues((prev) => {
        prev[index - 1] = ''
        return prev
      })
    }

    inputNavigation(index, key)
  }

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState((formStates) => ({
      isSubmitted: false,
      isLoading: {
        ...formStates.isLoading,
        submitHandler: true
      }
    }))

    try {
      await submitHandler(values.join(''))

      setFormState((formStates) => ({
        isSubmitted: true,
        isLoading: {
          ...formStates.isLoading,
          submitHandler: false
        }
      }))
      setStepsHandler((step) => step + 1)
      await new Promise((resolve) => setTimeout(resolve, 1500))
    } catch (error: any) {
      setFormState((formStates) => ({
        isSubmitted: false,
        isLoading: {
          ...formStates.isLoading,
          submitHandler: false
        }
      }))
      setInputError(error)
    }
  }

  const resendEmailHandler = async () => {
    setFormState((formStates) => ({
      ...formStates,
      isLoading: {
        ...formStates.isLoading,
        mailerHandler: true
      }
    }))

    try {
      await mailerHandler()

      dispatch(startCountdown())
    } catch (error: any) {
      /* istanbul ignore next */
      setFormState((formStates) => ({
        ...formStates,
        isLoading: {
          ...formStates.isLoading,
          mailerHandler: false
        }
      }))
      /* istanbul ignore next */
      setInputError(error)
    }
  }

  useEffect(() => {
    if (error) {
      setInputError(error)
    } else {
      setInputError(undefined)
    }
  }, [values, error])

  useEffect(() => {
    setInputError(undefined)
  }, [values])

  useEffect(() => {
    if (values.join('').length === 5) {
      form.requestSubmit()
    }
  }, [values])

  useEffect(() => {
    if (isOnCountdown) {
      setFormState((formStates) => ({
        ...formStates,
        isLoading: {
          ...formStates.isLoading,
          mailerHandler: false
        }
      }))
    }
  }, [isOnCountdown])

  const selectLastChar = ({
    currentTarget
  }: FocusEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>) =>
    currentTarget.setSelectionRange(
      currentTarget.value.length,
      currentTarget.value.length
    )

  return {
    resendEmailHandler,
    timeLeftInSeconds,
    onKeyPressHandler,
    onChangeHandler,
    onSubmitHandler,
    selectLastChar,
    isOnCountdown,
    inputError,
    formState,
    values
  }
}
