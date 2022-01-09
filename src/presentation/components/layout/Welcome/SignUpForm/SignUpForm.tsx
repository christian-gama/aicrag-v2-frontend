import React, { useContext } from 'react'
import FormContext from '@/application/models/context/form/FormContext'
import { useSignUpMutation } from '@/infra/api'
import BaseForm from '@/presentation/components/forms/BaseForm'
import ControlledInput from '@/presentation/components/forms/ControlledInput'
import Button from '@/presentation/components/UI/Button'
import * as style from './stylesheet'

const SignUpForm: React.FC = () => {
  const [signUp] = useSignUpMutation()
  const { state } = useContext(FormContext)

  const onSubmitHandler = async () => {
    await signUp({
      variables: {
        name: state.form.data.name,
        email: state.form.data.email,
        password: state.form.data.password,
        passwordConfirmation: state.form.data.passwordConfirmation
      }
    })
  }

  return (
    <BaseForm submitHandler={onSubmitHandler}>
      <div className={style.signUpForm}>
        <div className={style.inputWrapper}>
          <ControlledInput label="Seu nome" name="name" type="text" autoFocus />

          <ControlledInput label="Seu email" name="email" type="email" />

          <ControlledInput label="Sua senha" name="password" type="password" />

          <ControlledInput label="Confirme sua senha" name="passwordConfirmation" type="password" />
        </div>

        <div className={style.buttonWrapper}>
          <Button type="submit" style={{ size: 'lg' }}>
            Criar conta
          </Button>
        </div>
      </div>
    </BaseForm>
  )
}

export default SignUpForm
