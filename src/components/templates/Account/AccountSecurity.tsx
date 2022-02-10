/* eslint-disable @typescript-eslint/naming-convention */
import { useNavigate } from 'react-router-dom'
import { useForm } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { ControlForm, ControlInput } from '@/components/organisms/Control'
import { makeAccountSecurityValidator } from '@/external/factories/validation'
import { useUpdatePasswordMutation } from '@/external/graphql/generated'
import { popoverVar } from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const AccountSecurity: React.FC = () => {
  const navigate = useNavigate()
  const [updatePassword] = useUpdatePasswordMutation()
  const {
    state: { form }
  } = useForm<{
    currentPassword: string
    password: string
    passwordConfirmation: string
  }>()

  const submitHandler = async () => {
    await updatePassword({
      variables: {
        passwordConfirmation: form.data.passwordConfirmation,
        currentPassword: form.data.currentPassword,
        password: form.data.password
      }
    })

    return () => {
      popoverVar.setPopover('Senha alterada com sucesso', 'success')
      navigate('/')
    }
  }

  return (
    <div data-testid="account-security">
      <div>
        <ControlForm
          submitHandler={submitHandler}
          validator={makeAccountSecurityValidator()}
        >
          <div className={classes.accountForm}>
            {/* Accessibility */}
            <input autoComplete="username" style={{ display: 'none' }} />

            <ControlInput
              label="Sua senha atual"
              name="currentPassword"
              type="password"
              autoComplete="current-password"
              required
            />

            <ControlInput
              autoComplete="new-password"
              label="Sua nova senha"
              type="password"
              name="password"
              required
            />

            <ControlInput
              label="Confirme sua nova senha"
              name="passwordConfirmation"
              autoComplete="new-password"
              type="password"
              required
            />
          </div>

          <div className={classes.accountButton}>
            <Button type="submit" loading={form.isSubmitting}>
              Salvar
            </Button>
          </div>
        </ControlForm>
      </div>
    </div>
  )
}
