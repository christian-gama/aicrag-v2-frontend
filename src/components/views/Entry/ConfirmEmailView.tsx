import { useEffect } from 'react'
import { getUserByToken } from '@/services/token/getUserByToken'
import { Pin } from '@/components/organisms/Pin'
import {
  useActivateAccountMutation,
  useSendWelcomeEmailMutation
} from '@/external/graphql/generated'
import { authVar, popoverVar } from '@/external/graphql/reactiveVars'

export const ConfirmEmailView: React.FC = () => {
  const [sendWelcome] = useSendWelcomeEmailMutation()
  const [activateAccount, { data }] = useActivateAccountMutation()

  useEffect(() => {
    if (data?.activateAccount?.refreshToken) {
      popoverVar.setPopover(
        'Conta verificada com sucesso. Você foi redirecionado para a página inicial',
        'success'
      )

      authVar.login(data.activateAccount.user)
    }
  }, [data])

  const submitHandler = async (pin: string) => {
    await activateAccount({
      variables: {
        activationPin: pin,
        userId: getUserByToken('userId')
      }
    })
  }

  const mailerHandler = async () => {
    await sendWelcome({
      variables: {
        email: getUserByToken('email')
      }
    })
  }

  return (
    <div data-testid="confirm-email-view">
      <Pin
        mailerHandler={mailerHandler}
        submitHandler={submitHandler}
        stepName="Criar conta"
        to="/entry/sign-in"
        isPage
      />
    </div>
  )
}
