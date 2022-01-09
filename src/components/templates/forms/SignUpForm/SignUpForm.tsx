import React, { useContext } from 'react'
import { useSignUpMutation } from '@/services/api'
import FormContext from '@/context/models/form/FormContext'
import Button from '@/components/atoms/Button'
import ControlledInput from '@/components/molecules/ControlledInput'
import BaseForm from '@/components/organisms/BaseForm'
import makeSignUpValidator from '@/external/factories/validation/makeSignUpValidator'
import * as style from './stylesheet'

const SignUpForm: React.FC = () => {
  const [signUp, { loading }] = useSignUpMutation()
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
    <BaseForm
      submitHandler={onSubmitHandler}
      validator={makeSignUpValidator()}
      loading={loading}
      successMessage="Conta criada com sucesso"
    >
      <div className={style.signUpForm}>
        <div className={style.inputWrapper}>
          <ControlledInput label="Seu nome" name="name" type="text" autoFocus />

          <ControlledInput label="Seu email" name="email" type="email" />

          <ControlledInput label="Sua senha" name="password" type="password" />

          <ControlledInput label="Confirme sua senha" name="passwordConfirmation" type="password" />
        </div>

        <Button type="submit" style={{ size: 'lg' }} loading={loading}>
          Criar conta
        </Button>
      </div>
    </BaseForm>
  )
}

export default SignUpForm
