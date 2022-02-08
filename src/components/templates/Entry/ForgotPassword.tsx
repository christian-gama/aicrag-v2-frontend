import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '@/context/models/form'
import {
  mailerCountdownActions,
  MailerCountdownStates
} from '@/context/models/mailerCountdown'
import { AppDispatch, RootState } from '@/context/store'
import { Button } from '@/components/atoms/Button'
import { NavHeader } from '@/components/molecules/NavHeader'
import { ControlForm, ControlInput } from '@/components/organisms/Control'
import { makeForgotPasswordValidator } from '@/external/factories/validation'
import {
  useForgotPasswordMutation,
  useSendRecoverPasswordEmailMutation
} from '@/external/graphql/generated'
import * as classes from './stylesheet'

export const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { startCountdown } = mailerCountdownActions
  const { isOnCountdown, timeLeftInSeconds } = useSelector<
  RootState,
  MailerCountdownStates
  >((state) => state.mailerCountdown)

  const [forgotPassword] = useForgotPasswordMutation()
  const [sendRecoverPasswordEmail] = useSendRecoverPasswordEmailMutation()

  const { state } = useForm<{ email: string }>()
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
    <>
      <NavHeader to="/entry/sign-in" title="Esqueceu sua senha?" />

      <main>
        <ControlForm
          successMessage="Instruções para recuperar a sua senha foram enviadas para o seu email."
          validator={makeForgotPasswordValidator()}
          submitHandler={onSubmitHandler}
        >
          <div className={classes.forgotPassword}>
            <div className={classes.forgotPasswordInputWrapper}>
              <ControlInput
                autoComplete="email"
                label="Seu email"
                name="email"
                type="email"
                autoFocus
                required
              />
            </div>

            <Button
              loading={state.form.isSubmitting && !isOnCountdown}
              disabled={isOnCountdown}
              style={{ size: 'lg' }}
              testid="submit-button"
              type="submit"
            >
              {isOnCountdown ? `${timeLeftInSeconds} s` : 'Resetar senha'}
            </Button>
          </div>
        </ControlForm>
      </main>
    </>
  )
}
