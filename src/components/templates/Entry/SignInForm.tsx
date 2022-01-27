import React, { useContext } from 'react'
import FormContext from '@/context/models/form/form.context'
import Button from '@/components/atoms/Button'
import Link from '@/components/atoms/texts/Link'
import ControlForm from '@/components/organisms/Control/ControlForm'
import ControlInput from '@/components/organisms/Control/ControlInput'
import makeSignInValidator from '@/external/factories/validation/makeSignInValidator'
import { useLoginMutation } from '@/external/graphql/generated'
import { authVar } from '@/external/graphql/reactiveVars/authVar'
import * as style from './stylesheet'

const SignInForm: React.FC = () => {
  const [login] = useLoginMutation()

  const { state } = useContext(FormContext)
  const onSubmitHandler = async () => {
    const response = await login({
      variables: {
        password: state.form.data.password,
        email: state.form.data.email
      }
    })

    if (
      response.data?.login?.accessToken &&
      // @ts-expect-error
      !response.data?.login?.refreshToken
    ) {
      authVar.partialLogin()
    }

    // @ts-expect-error
    if (response.data?.login?.refreshToken) {
      authVar.login()
    }
  }

  return (
    <ControlForm
      successMessage="Login efetuado com sucesso"
      validator={makeSignInValidator()}
      loading={state.form.isSubmitting}
      submitHandler={onSubmitHandler}
    >
      <div className={style.signInForm}>
        <div className={style.signInFormInputWrapper}>
          <ControlInput label="Seu email" name="email" type="email" autoFocus />

          <ControlInput label="Sua senha" name="password" type="password" />
        </div>

        <div className={style.signInFormButtonWrapper}>
          <Button
            loading={state.form.isSubmitting}
            style={{ size: 'lg' }}
            testid="submit-button"
            type="submit"
          >
            Acessar
          </Button>
        </div>

        <div className={style.signInFormForgotPasswordWrapper}>
          <Link to="/entry/forgot-password">Esqueceu sua senha?</Link>
        </div>
      </div>
    </ControlForm>
  )
}

export default SignInForm
