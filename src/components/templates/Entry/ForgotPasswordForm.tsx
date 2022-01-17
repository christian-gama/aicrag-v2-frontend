import React, { useContext, useEffect, useState } from 'react'
import { useForgotPasswordMutation, useSendRecoverPasswordEmailMutation } from '@/services/api'
import FormContext from '@/context/models/form/form.context'
import Button from '@/components/atoms/Button'
import ControlForm from '@/components/organisms/Control/ControlForm'
import ControlInput from '@/components/organisms/Control/ControlInput'
import makeForgotPasswordValidator from '@/external/factories/validation/makeForgotPasswordValidation'
import * as style from './stylesheet'

const ForgotPasswordForm: React.FC = () => {
  const [startCountdown, setStartCountdown] = useState(false)
  const [countdown, setCountdown] = useState(60)

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
  const [sendRecoverPasswordEmail, { loading: loadingRecover }] = useSendRecoverPasswordEmailMutation()

  const { state } = useContext(FormContext)

  const onSubmitHandler = async () => {
    /* istanbul ignore next */
    await forgotPassword({
      variables: { email: state.form.data.email }
    })

    /* istanbul ignore next */
    const response = await sendRecoverPasswordEmail({
      variables: {
        email: state.form.data.email
      }
    })

    /* istanbul ignore next */
    if (response.data?.sendRecoverPasswordEmail) {
      setCountdown(60)
      setStartCountdown(true)
    } else {
      setStartCountdown(false)
    }
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
