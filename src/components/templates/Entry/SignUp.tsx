import { useContext } from 'react'
import { FormContext } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { ControlForm, ControlInput } from '@/components/organisms/Control'
import { makeSignUpValidator } from '@/external/factories/validation'
import {
  useSignUpMutation,
  useSendWelcomeEmailMutation
} from '@/external/graphql/generated'
import * as classes from './stylesheet'

export const SignUp: React.FC = () => {
  const [signUp] = useSignUpMutation()
  const [sendWelcomeEmail] = useSendWelcomeEmailMutation()

  const { state } = useContext(FormContext)

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
              label="Seu nome"
              name="name"
              type="text"
              autoFocus
              autoComplete="name"
            />

            <ControlInput
              autoComplete="username"
              label="Seu email"
              name="email"
              type="email"
            />

            <ControlInput
              autoComplete="new-password"
              label="Sua senha"
              name="password"
              type="password"
            />

            <ControlInput
              name="passwordConfirmation"
              autoComplete="new-password"
              label="Confirme sua senha"
              type="password"
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
