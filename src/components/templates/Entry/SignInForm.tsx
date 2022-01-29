import { useContext } from 'react'
import { FormContext } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { ControlForm, ControlInput } from '@/components/organisms/Control'
import { Link } from '@/components/utils/texts/Link'
import { makeSignInValidator } from '@/external/factories/validation'
import { useLoginMutation } from '@/external/graphql/generated'
import { authVar } from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const SignInForm: React.FC = () => {
  const [login, { data }] = useLoginMutation()

  const { state } = useContext(FormContext)
  const onSubmitHandler = async () => {
    const { data } = await login({
      variables: {
        password: state.form.data.password,
        email: state.form.data.email
      }
    })

    const typename = data?.login?.__typename
    if (typename === 'ActiveAccount') {
      return authVar.login
    }

    return authVar.partialLogin
  }

  return (
    <ControlForm
      successMessage={
        data?.login?.__typename === 'ActiveAccount'
          ? `Boas-vindas, ${data.login.user.personal.name}! Seu login foi efetuado com sucesso`
          : undefined
      }
      submitHandler={onSubmitHandler}
      validator={makeSignInValidator()}
      loading={state.form.isSubmitting}
    >
      <div className={classes.signInForm}>
        <div className={classes.signInFormInputWrapper}>
          <ControlInput
            autoComplete="username"
            label="Seu email"
            name="email"
            type="email"
            autoFocus
          />

          <ControlInput
            autoComplete="current-password"
            label="Sua senha"
            name="password"
            type="password"
          />
        </div>

        <Button
          loading={state.form.isSubmitting}
          style={{ size: 'lg' }}
          testid="submit-button"
          type="submit"
        >
          Acessar
        </Button>

        <div className={classes.signInFormForgotPasswordWrapper}>
          <Link to="/entry/forgot-password">Esqueceu sua senha?</Link>
        </div>
      </div>
    </ControlForm>
  )
}
