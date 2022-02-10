import jwtDecode from 'jwt-decode'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { NavHeader } from '@/components/molecules/NavHeader'
import { ControlForm, ControlInput } from '@/components/organisms/Control'
import { Center } from '@/components/utils/Center'
import { LoadingSpinnerIcon } from '@/components/utils/icons'
import { makeResetPasswordValidation } from '@/external/factories/validation'
import {
  useResetPasswordMutation,
  useVerifyResetPasswordTokenLazyQuery
} from '@/external/graphql/generated'
import { authVar } from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const ResetPassword: React.FC = () => {
  const { token } = useParams()
  const navigate = useNavigate()

  const { state } =
    useForm<{ password: string, passwordConfirmation: string }>()
  const [resetPassword] = useResetPasswordMutation()
  const [verifyResetPasswordToken, { data, loading }] =
    useVerifyResetPasswordTokenLazyQuery()

  useEffect(() => {
    try {
      jwtDecode(token!)
      verifyResetPasswordToken({ variables: { token } }).catch(() => {
        navigate('/404', { replace: true })
      })
    } catch (err) {
      navigate('/404', { replace: true })
    }
  }, [token])

  if (!data || loading) {
    return (
      <Center>
        <LoadingSpinnerIcon style={{ size: 'lg' }} />
      </Center>
    )
  }

  const submitHandler = async () => {
    const { data } = await resetPassword({
      variables: {
        password: state.form.data.password,
        passwordConfirmation: state.form.data.passwordConfirmation
      }
    })

    return () => {
      navigate('/')

      authVar.login(data!.resetPassword.user)
    }
  }

  return (
    <>
      <NavHeader to="/" title="Resete a sua senha" />

      <main>
        <div data-testid="reset-password">
          <ControlForm
            successMessage="Senha alterada com sucesso. Você foi autenticado e redirecionado para a página inicial"
            validator={makeResetPasswordValidation()}
            loading={state.form.isSubmitting}
            submitHandler={submitHandler}
          >
            <div className={classes.resetPassword}>
              <div className={classes.resetPasswordInputWrapper}>
                <ControlInput
                  autoComplete="new-password"
                  label="Nova senha"
                  name="password"
                  type="password"
                  required
                />

                <ControlInput
                  label="Confirmar nova senha"
                  autoComplete="new-password"
                  name="passwordConfirmation"
                  type="password"
                  required
                />
              </div>

              <Button
                loading={state.form.isSubmitting}
                style={{ size: 'lg' }}
                type="submit"
              >
                Resetar senha
              </Button>
            </div>
          </ControlForm>
        </div>
      </main>
    </>
  )
}
