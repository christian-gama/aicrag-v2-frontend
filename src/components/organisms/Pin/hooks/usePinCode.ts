import {
  MailerCountdownStates,
  mailerCountdownActions
} from '@/context/models/mailerCountdown'
import { AppDispatch, RootState } from '@/context/store'
import {
  useActivateAccountMutation,
  useSendWelcomeEmailMutation
} from '@/external/graphql/generated'
import { popoverVar, authVar } from '@/external/graphql/reactiveVars'
import { Maybe } from '@/helpers'
import { createFilledArray } from '@/helpers/createFilledArray'
import { getUserByToken } from '@/services/token/getUserByToken'
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
  setStepsHandler
}: ComponentPropsWithRef<typeof PinCode>) => {
  const [activateAccount, { error }] = useActivateAccountMutation()
  const [sendWelcome] = useSendWelcomeEmailMutation()
  const [formState, setFormState] = useState({
    isLoading: false,
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
    setFormState((formStates) => ({ ...formStates, isLoading: true }))

    try {
      await activateAccount({
        variables: {
          activationPin: values.join(''),
          userId: getUserByToken('userId')
        }
      })

      setFormState({ isSubmitted: true, isLoading: false })
      setStepsHandler((step) => step + 1)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      popoverVar.setPopover(
        'Conta verificada com sucesso. Você foi redirecionado para a página inicial',
        'success'
      )
      authVar.login()
    } catch (error: any) {
      setFormState((formStates) => ({ ...formStates, isLoading: false }))
      setInputError(error)
    }
  }

  const resendEmailHandler = async () => {
    setFormState((formStates) => ({ ...formStates, isLoading: true }))

    try {
      await sendWelcome({
        variables: {
          email: getUserByToken('email')
        }
      })

      setFormState((formStates) => ({ ...formStates, isLoading: false }))
      dispatch(startCountdown())
    } catch (error: any) {
      setFormState((formStates) => ({ ...formStates, isLoading: false }))
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
