import React, { useContext } from 'react'
import FormContext from '@/application/models/context/form/FormContext'
import { useLoginMutation } from '@/infra/api'
import BaseForm from '@/presentation/components/forms/BaseForm'
import ControlledInput from '@/presentation/components/forms/ControlledInput'
import Button from '@/presentation/components/UI/Button'
import * as style from './stylesheet'

const SignInForm: React.FC = () => {
  const [login] = useLoginMutation()
  const { state } = useContext(FormContext)

  const onSubmitHandler = async () => {
    await login({
      variables: { email: state.form.data.email, password: state.form.data.password }
    })
  }

  return (
    <BaseForm submitHandler={onSubmitHandler}>
      <div className={style.signInForm}>
        <div className={style.inputWrapper}>
          <ControlledInput label="Seu email" name="email" type="email" autoFocus />

          <ControlledInput label="Sua senha" name="password" type="password" />
        </div>

        <div className={style.buttonWrapper}>
          <Button type="submit" style={{ size: 'lg' }}>
            Acessar
          </Button>
        </div>

        <span className={style.forgotPassword}>Esqueceu sua senha?</span>
      </div>
    </BaseForm>
  )
}

export default SignInForm
