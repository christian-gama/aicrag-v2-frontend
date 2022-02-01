import { ApolloError } from '@apollo/client'
import { FocusEvent, FormEvent, MouseEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserIdByAccessToken } from '@/services/token/getUserIdByToken'
import { Button } from '@/components/atoms/Button'
import { useActivateAccountMutation } from '@/external/graphql/generated'
import { authVar } from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const PinCode: React.FC = () => {
  const navigate = useNavigate()
  const [activateAccount, { error }] = useActivateAccountMutation()
  const [isLoading, setIsLoading] = useState(false)
  const [inputError, setInputError] = useState<ApolloError | undefined>()
  const [values, setValues] = useState<string[]>(
    Array.from({ length: 5 }).fill('', 0, 5) as string[]
  )

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
    setIsLoading(true)

    try {
      await activateAccount({
        variables: {
          activationPin: values.join(''),
          userId: getUserIdByAccessToken()
        }
      })

      setIsLoading(false)
      authVar.login()
      navigate('/', { replace: true })
    } catch (error: any) {
      setIsLoading(false)
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

  const pinInputClass = classes.pinInput({
    state: inputError ? 'error' : 'default'
  })

  return (
    <form
      className={classes.pinCodeWrapper}
      onSubmit={onSubmitHandler}
      data-testid="form"
    >
      <div className={classes.pinCode}>
        {values.map((value, index) => (
          <input
            onChange={(event) => onChangeHandler(event.target.value, index)}
            onKeyDown={(event) => onKeyPressHandler(event.key, index)}
            className={pinInputClass}
            onClick={selectLastChar}
            onFocus={selectLastChar}
            data-testid="pin-input"
            autoFocus={index === 0}
            data-index={index}
            value={value}
            key={index}
            type="text"
          />
        ))}
      </div>

      <Button disabled={isLoading} style={{ size: 'lg' }} onClick={() => {}}>
        Reenviar código
      </Button>
    </form>
  )
}
