import React, { useContext, useEffect, useState } from 'react'
import FormContext from '@/context/models/form/form.context'
import Button from '@/components/atoms/Button'
import ControlForm from '@/components/organisms/Control/ControlForm'
import ControlInput from '@/components/organisms/Control/ControlInput'
import makeForgotPasswordValidator from '@/external/factories/validation/makeForgotPasswordValidation'
import {
  useForgotPasswordMutation,
  useSendRecoverPasswordEmailMutation
} from '@/external/graphql/generated'
import * as style from './stylesheet'

const ForgotPasswordForm: React.FC = () => {
  const [startCountdown, setStartCountdown] = useState(false)
  const [countdown, setCountdown] = useState(60)

  /* istanbul ignore next */
  useEffect(() => {
    if (startCountdown) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) setStartCountdown(false)

          return prev - 1
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [startCountdown])

  const [forgotPassword, { loading }] = useForgotPasswordMutation()
  const [sendRecoverPasswordEmail, { loading: loadingRecover }] =
    useSendRecoverPasswordEmailMutation()

  const { state } = useContext(FormContext)

  const onSubmitHandler = async () => {
    await forgotPassword({
      variables: { email: state.form.data.email }
    })

    await sendRecoverPasswordEmail({
      variables: {
        email: state.form.data.email
      }
    })

    setCountdown(60)
    setStartCountdown(true)
  }

  return (
    <ControlForm
      submitHandler={onSubmitHandler}
      validator={makeForgotPasswordValidator()}
      loading={loading}
      successMessage="Instruções para recuperar a sua senha foram enviadas para o seu email."
    >
      <div className={style.forgotPasswordForm}>
        <div className={style.forgotPasswordFormInputWrapper}>
          <ControlInput label="Seu email" name="email" type="email" autoFocus />
        </div>

        <div className={style.forgotPasswordFormButtonWrapper}>
          <Button
            disabled={startCountdown}
            type="submit"
            style={{ size: 'lg' }}
            loading={loading || loadingRecover}
            testid="submit-button"
          >
            {startCountdown ? `${countdown} s` : 'Resetar senha'}
          </Button>
        </div>
      </div>
    </ControlForm>
  )
}

export default ForgotPasswordForm
