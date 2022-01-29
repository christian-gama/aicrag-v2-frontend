import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FormContext from '@/context/models/form/form.context'
import Button from '@/components/atoms/Button'
import ControlForm from '@/components/organisms/Control/ControlForm'
import ControlInput from '@/components/organisms/Control/ControlInput'
import Center from '@/components/utils/Center'
import LoadingSpinnerIcon from '@/components/utils/icons/LoadingSpinnerIcon'
import {
  useResetPasswordMutation,
  useVerifyResetPasswordTokenQuery
} from '@/external/graphql/generated'
import { authVar } from '@/external/graphql/reactiveVars/authVar'
import * as style from './stylesheet'

const ResetPasswordForm: React.FC = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const { state } = useContext(FormContext)
  const [resetPassword] = useResetPasswordMutation()
  const { error, loading } = useVerifyResetPasswordTokenQuery({
    variables: {
      token
    },
    onCompleted: () => {
      authVar.partialLogin()
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
        loading={state.form.isSubmitting}
        submitHandler={submitHandler}
      >
        <div className={style.resetPasswordForm}>
          <div className={style.resetPasswordFormInputWrapper}>
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

          <div>
            <Button
              loading={state.form.isSubmitting}
              style={{ size: 'lg' }}
              type="submit"
            >
              Resetar senha
            </Button>
          </div>
        </div>
      </ControlForm>
    </div>
  )
}

export default ResetPasswordForm
