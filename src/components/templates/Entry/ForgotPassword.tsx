import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormContext } from '@/context/models/form'
import {
  mailerCountdownActions,
  MailerCountdownStates
} from '@/context/models/mailerCountdown'
import { AppDispatch, RootState } from '@/context/store'
import { useWindowDimensions } from '@/components/_hooks'
import { Button } from '@/components/atoms/Button'
import { ControlForm, ControlInput } from '@/components/organisms/Control'
import { Divider } from '@/components/utils/Divider'
import { BackIcon } from '@/components/utils/icons'
import { H2 } from '@/components/utils/texts/H2'
import { H3 } from '@/components/utils/texts/H3'
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

  const { width } = useWindowDimensions()
  const [forgotPassword] = useForgotPasswordMutation()
  const [sendRecoverPasswordEmail] = useSendRecoverPasswordEmailMutation()

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
    <>
      <header className={classes.forgotPasswordHeader}>
        <nav>
          <Link to="/entry/sign-in" aria-label="Voltar">
            <BackIcon />
          </Link>
        </nav>

        <div>
          {width <= 520
            ? (
            <H3>Esqueceu sua senha?</H3>
              )
            : (
            <H2>Esqueceu sua senha?</H2>
              )}
        </div>
      </header>

      <Divider />

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
