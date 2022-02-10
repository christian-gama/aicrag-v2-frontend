/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect, useState } from 'react'
import { useForm } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import {
  ControlForm,
  ControlInput,
  ControlRadioInput
} from '@/components/organisms/Control'
import { Pin } from '@/components/organisms/Pin'
import { P } from '@/components/utils/texts/P'
import { makeAccountDataValidator } from '@/external/factories/validation'
import {
  UserCurrency,
  useSendEmailPinMutation,
  useUpdateEmailByPinMutation,
  useUpdateMeMutation
} from '@/external/graphql/generated'
import {
  authVar,
  popoverVar,
  refetchInvoiceVar,
  useAuth
} from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const AccountData: React.FC = () => {
  const { user } = useAuth()
  const [checked, setChecked] = useState(user.settings.currency)
  const [isPinOpen, setIsPinOpen] = useState(false)
  const [updateEmailByPin, { error }] = useUpdateEmailByPinMutation()
  const [sendEmailPin] = useSendEmailPinMutation()
  const [updateMe] = useUpdateMeMutation()
  const {
    state: { form }
  } = useForm<{ currency: UserCurrency, email: string, name: string }>()

  useEffect(() => {
    setChecked(user.settings.currency)
  }, [user])

  const isSameCurrency = form.data.currency === user.settings.currency
  const isSameEmail = form.data.email === user.personal.email
  const isSameName = form.data.name === user.personal.name

  const submitHandler = async () => {
    const { data } = await updateMe({
      variables: {
        currency: isSameCurrency ? undefined : form.data.currency,
        email: isSameEmail ? undefined : form.data.email,
        name: isSameName ? undefined : form.data.name
      }
    })

    if (!isSameEmail) {
      setIsPinOpen(true)
    }

    const hasChanges = data?.updateMe.__typename === 'UpdateMeHasChanges'
    const hasNoChanges = data?.updateMe.__typename === 'UpdateMeNoChanges'
    const hasValidCurrency = !isSameCurrency && form.data.currency

    if (hasChanges && (!isSameName || hasValidCurrency)) {
      // @ts-expect-error
      authVar.setUser(data.updateMe.user)
      refetchInvoiceVar.refetch()
      popoverVar.setPopover(
        'Seus dados foram atualizados com sucesso',
        'success'
      )
    }

    if (hasNoChanges) {
      popoverVar.setPopover(
        'Você não fez nenhuma alteração, portanto seus dados não foram alterados ',
        'info'
      )
    }
  }

  const submitPinHandler = async (pin: string) => {
    await updateEmailByPin({
      variables: {
        emailPin: pin
      }
    })

    setIsPinOpen(false)
    popoverVar.setPopover('Email atualizado com sucesso', 'success')
  }

  const mailerHandler = async () => {
    await sendEmailPin({ variables: { email: user.personal.email } })
  }

  return (
    <div data-testid="account-data">
      <div>
        <ControlForm
          submitHandler={submitHandler}
          validator={makeAccountDataValidator()}
        >
          <div className={classes.accountForm}>
            <ControlInput
              defaultValue={user.personal.name}
              label="Seu nome"
              name="name"
              required
            />

            <ControlInput
              defaultValue={user.personal.email}
              label="Seu email"
              name="email"
              required
            />

            <div className={classes.accountDataPreferences}>
              <P color="secondaryDarker">Preferências</P>

              <div className={classes.accountDataPreferencesInputs}>
                <ControlRadioInput
                  onChange={(event) => setChecked(event.target.value)}
                  checked={UserCurrency.Usd === checked}
                  value={UserCurrency.Usd}
                  name="currency"
                  label="Dólar"
                />

                <ControlRadioInput
                  onChange={(event) => setChecked(event.target.value)}
                  checked={UserCurrency.Brl === checked}
                  value={UserCurrency.Brl}
                  name="currency"
                  label="Real"
                />
              </div>
            </div>
          </div>

          <div className={classes.accountButton}>
            <Button type="submit" loading={form.isSubmitting}>
              Salvar
            </Button>
          </div>
        </ControlForm>
      </div>

      <Pin
        dismissHandler={() => setIsPinOpen(false)}
        submitHandler={submitPinHandler}
        mailerHandler={mailerHandler}
        stepName="Alterar email"
        isOpen={isPinOpen}
        error={error}
      />
    </div>
  )
}
