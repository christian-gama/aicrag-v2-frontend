import React, { useContext } from 'react'
import { useLoginMutation } from '@/services/api'
import FormContext from '@/context/models/form/form.context'
import Button from '@/components/atoms/Button'
import ControlForm from '@/components/organisms/Control/ControlForm'
import ControlInput from '@/components/organisms/Control/ControlInput'
import makeSignInValidator from '@/external/factories/validation/makeSignInValidator'
import { auth } from '@/external/graphql/reactiveVars/auth'
import * as style from './stylesheet'

const SignInForm: React.FC = () => {
  const [login, { loading }] = useLoginMutation()

  const { state } = useContext(FormContext)

  const onSubmitHandler = async () => {
    const response = await login({
      variables: { email: state.form.data.email, password: state.form.data.password }
    })

    /* istanbul ignore next */
    // @ts-expect-error
    if (response.data?.login?.accessToken && !response.data?.login?.refreshToken) {
      auth.partialLogin()
    }

    /* istanbul ignore next */
    // @ts-expect-error
    if (response.data?.login?.refreshToken) {
      auth.login()
    }
  }

  return (
    <ControlForm
      submitHandler={onSubmitHandler}
      validator={makeSignInValidator()}
      loading={loading}
      successMessage="Login efetuado com sucesso"
    >
      <div className={style.signInForm}>
        <div className={style.signInFormInputWrapper}>
          <ControlInput label="Seu email" name="email" type="email" autoFocus />

          <ControlInput label="Sua senha" name="password" type="password" />
        </div>

        <div className={style.signInFormButtonWrapper}>
          <Button type="submit" style={{ size: 'lg' }} loading={loading} testid="submit-button">
            Acessar
          </Button>
        </div>

        <span className={style.signInFormForgotPassword}>Esqueceu sua senha?</span>
      </div>
    </ControlForm>
  )
}

export default SignInForm
