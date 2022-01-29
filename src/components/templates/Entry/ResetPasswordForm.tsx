import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FormContext } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { ControlForm, ControlInput } from '@/components/organisms/Control'
import { Center } from '@/components/utils/Center'
import { LoadingSpinnerIcon } from '@/components/utils/icons'
import { makeResetPasswordValidation } from '@/external/factories/validation'
import {
  useResetPasswordMutation,
  useVerifyResetPasswordTokenQuery
} from '@/external/graphql/generated'
import { authVar } from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const ResetPasswordForm: React.FC = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const { state } = useContext(FormContext)
  const [resetPassword] = useResetPasswordMutation()
  const { error, loading } = useVerifyResetPasswordTokenQuery({
    variables: {
      token
    }
  })

  if (error) {
    navigate('/404')

    return null
  }

  if (loading) {
    return (
      <Center>
        <LoadingSpinnerIcon style={{ size: 'lg' }} />
      </Center>
    )
  }

  const submitHandler = async () => {
    await resetPassword({
      variables: {
        password: state.form.data.password,
        passwordConfirmation: state.form.data.passwordConfirmation
      }
    })

    return () => {
      navigate('/')

      authVar.login()
    }
  }

  return (
    <div data-testid="reset-password">
      <ControlForm
        successMessage="Senha alterada com sucesso. Você foi autenticado e redirecionado para a página inicial"
        validator={makeResetPasswordValidation()}
        loading={state.form.isSubmitting}
        submitHandler={submitHandler}
      >
        <div className={classes.resetPasswordForm}>
          <div className={classes.resetPasswordFormInputWrapper}>
            <ControlInput
              autoComplete="new-password"
              label="Nova senha"
              name="password"
              type="password"
            />

            <ControlInput
              label="Confirmar nova senha"
              autoComplete="new-password"
              name="passwordConfirmation"
              type="password"
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
  )
}
