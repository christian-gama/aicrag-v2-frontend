import React, { useContext } from 'react'
import Button from '@/components/atoms/Button'
import BaseForm from '@/components/organisms/BaseForm'
import FormContext from '@/application/models/context/form/FormContext'
import { useLoginMutation } from '@/infra/api'
import ControlledInput from '@/presentation/components/forms/ControlledInput'
import makeSignInValidator from '@/external/factories/validation/makeSignInValidator'
import * as style from './stylesheet'

const SignInForm: React.FC = () => {
  const [login, { loading }] = useLoginMutation()
  const { state } = useContext(FormContext)

  const onSubmitHandler = async () => {
    await login({
      variables: { email: state.form.data.email, password: state.form.data.password }
    })
  }

  return (
    <BaseForm
      submitHandler={onSubmitHandler}
      validator={makeSignInValidator()}
      loading={loading}
      successMessage="Login efetuado com sucesso"
    >
      <div className={style.signInForm}>
        <div className={style.inputWrapper}>
          <ControlledInput label="Seu email" name="email" type="email" autoFocus />

          <ControlledInput label="Sua senha" name="password" type="password" />
        </div>

        <div className={style.buttonWrapper}>
          <Button type="submit" style={{ size: 'lg' }} loading={loading}>
            Acessar
          </Button>
        </div>

        <span className={style.forgotPassword}>Esqueceu sua senha?</span>
      </div>
    </BaseForm>
  )
}

export default SignInForm
