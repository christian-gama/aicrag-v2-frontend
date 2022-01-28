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
  const [login, { data }] = useLoginMutation()

  const { state } = useContext(FormContext)
  const onSubmitHandler = async () => {
    const { data } = await login({
      variables: {
        password: state.form.data.password,
        email: state.form.data.email
      }
    })

    const typename = data?.login?.__typename
    if (typename === 'InactiveAccount') {
      return authVar.partialLogin
    }

    if (typename === 'ActiveAccount') {
      return authVar.login
    }
  }

  return (
    <ControlForm
      successMessage={
        data?.login?.__typename === 'ActiveAccount'
          ? `Boas-vindas, ${data.login.user.personal.name}! Seu login foi efetuado com sucesso`
          : undefined
      }
      submitHandler={onSubmitHandler as any}
      validator={makeSignInValidator()}
      loading={state.form.isSubmitting}
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
