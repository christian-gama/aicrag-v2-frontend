import React, { useContext } from 'react'
import { useSignUpMutation } from '@/services/api'
import FormContext from '@/context/models/form/form.context'
import Button from '@/components/atoms/Button'
import ControlForm from '@/components/organisms/Control/ControlForm'
import ControlInput from '@/components/organisms/Control/ControlInput'
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
    <ControlForm
      submitHandler={onSubmitHandler}
      validator={makeSignUpValidator()}
      loading={loading}
      successMessage="Conta criada com sucesso"
    >
      <div className={style.signUpForm}>
        <div className={style.signUpFormInputWrapper}>
          <ControlInput label="Seu nome" name="name" type="text" autoFocus />

          <ControlInput label="Seu email" name="email" type="email" />

          <ControlInput label="Sua senha" name="password" type="password" />

          <ControlInput label="Confirme sua senha" name="passwordConfirmation" type="password" />
        </div>

        <Button type="submit" style={{ size: 'lg' }} loading={loading}>
          Criar conta
        </Button>
      </div>
    </ControlForm>
  )
}

export default SignUpForm