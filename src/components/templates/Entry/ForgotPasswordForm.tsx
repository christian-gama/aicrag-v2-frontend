import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormContext from '@/context/models/form/form.context'
import { mailerCountdownActions } from '@/context/models/mailerCountdown/mailerCountdown.actions'
import { MailerCountdownStates } from '@/context/models/mailerCountdown/protocols/mailerCountdown.model'
import { AppDispatch, RootState } from '@/context/store'
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
  const dispatch = useDispatch<AppDispatch>()
  const { startCountdown } = mailerCountdownActions
  const { isOnCountdown, timeLeftInSeconds } = useSelector<
  RootState,
  MailerCountdownStates
  >((state) => state.mailerCountdown)

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

    dispatch(startCountdown())
  }

  return (
    <ControlForm
      successMessage="Instruções para recuperar a sua senha foram enviadas para o seu email."
      validator={makeForgotPasswordValidator()}
      submitHandler={onSubmitHandler}
      loading={loading}
    >
      <div className={style.forgotPasswordForm}>
        <div className={style.forgotPasswordFormInputWrapper}>
          <ControlInput label="Seu email" name="email" type="email" autoFocus />
        </div>

        <div className={style.forgotPasswordFormButtonWrapper}>
          <Button
            loading={loading || loadingRecover}
            disabled={isOnCountdown}
            style={{ size: 'lg' }}
            testid="submit-button"
            type="submit"
          >
            {isOnCountdown ? `${timeLeftInSeconds} s` : 'Resetar senha'}
          </Button>
        </div>
      </div>
    </ControlForm>
  )
}

export default ForgotPasswordForm
