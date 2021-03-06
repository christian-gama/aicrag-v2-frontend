import { useNavigate } from 'react-router-dom'
import { formatName } from '@/helpers'
import { useForm } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { ControlForm, ControlInput } from '@/components/organisms/Control'
import { Link } from '@/components/utils/texts/Link'
import { makeSignInValidator } from '@/external/factories/validation'
import { useLoginMutation } from '@/external/graphql/generated'
import { authVar } from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const SignIn: React.FC = () => {
  const navigate = useNavigate()
  const [login, { data }] = useLoginMutation()

  const { state } = useForm<{ email: string, password: string }>()
  const onSubmitHandler = async () => {
    const { data } = await login({
      variables: {
        password: state.form.data.password,
        email: state.form.data.email
      }
    })

    const loginData = data?.login
    if (loginData?.__typename === 'ActiveAccount') {
      return () => authVar.login(loginData.user)
    }

    authVar.partialLogin()
    return () => navigate('/confirm-email')
  }

  return (
    <>
      <ControlForm
        successMessage={
          data?.login?.__typename === 'ActiveAccount'
            ? `Boas-vindas, ${formatName(
                data.login.user.personal.name
              )}! Seu login foi efetuado com sucesso`
            : undefined
        }
        submitHandler={onSubmitHandler}
        validator={makeSignInValidator()}
        loading={state.form.isSubmitting}
      >
        <div className={classes.signIn}>
          <div className={classes.signInInputWrapper}>
            <ControlInput
              autoComplete="username"
              label="Seu email"
              name="email"
              type="email"
              autoFocus
              required
            />

            <ControlInput
              autoComplete="current-password"
              label="Sua senha"
              name="password"
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
            Acessar
          </Button>

          <div className={classes.signInFooter}>
            <Link to="/entry/forgot-password">Esqueceu sua senha?</Link>
          </div>
        </div>
      </ControlForm>
    </>
  )
}
