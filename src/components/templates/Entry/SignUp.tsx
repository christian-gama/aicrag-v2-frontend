import { useNavigate } from 'react-router-dom'
import { useForm } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { ControlForm, ControlInput } from '@/components/organisms/Control'
import { makeSignUpValidator } from '@/external/factories/validation'
import {
  useSignUpMutation,
  useSendWelcomeEmailMutation
} from '@/external/graphql/generated'
import { authVar } from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const SignUp: React.FC = () => {
  const navigate = useNavigate()
  const [signUp] = useSignUpMutation()
  const [sendWelcomeEmail] = useSendWelcomeEmailMutation()

  const { state } = useForm<{
    passwordConfirmation: string
    password: string
    email: string
    name: string
  }>()

  const onSubmitHandler = async () => {
    await signUp({
      variables: {
        passwordConfirmation: state.form.data.passwordConfirmation,
        password: state.form.data.password,
        email: state.form.data.email,
        name: state.form.data.name
      }
    })

    await sendWelcomeEmail({
      variables: {
        email: state.form.data.email
      }
    })

    authVar.partialLogin()
    return () => setTimeout(() => navigate('/confirm-email'), 125)
  }

  return (
    <>
      <ControlForm
        successMessage="Conta criada com sucesso"
        loading={state.form.isSubmitting}
        validator={makeSignUpValidator()}
        submitHandler={onSubmitHandler}
      >
        <div className={classes.signUp}>
          <div className={classes.signUpInputWrapper}>
            <ControlInput
              autoComplete="name"
              label="Seu nome"
              name="name"
              type="text"
              autoFocus
              required
            />

            <ControlInput
              autoComplete="username"
              label="Seu email"
              name="email"
              type="email"
              required
            />

            <ControlInput
              autoComplete="new-password"
              label="Sua senha"
              name="password"
              type="password"
              required
            />

            <ControlInput
              name="passwordConfirmation"
              autoComplete="new-password"
              label="Confirme sua senha"
              type="password"
              required
            />
          </div>

          <Button
            loading={state.form.isSubmitting}
            style={{ size: 'lg' }}
            testid="submit-button"
            type="submit"
          >
            Criar conta
          </Button>
        </div>
      </ControlForm>
    </>
  )
}
