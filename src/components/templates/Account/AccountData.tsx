/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect, useState } from 'react'
import { InternalError } from '@/services/errors'
import { useForm } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { LoadingSkeleton } from '@/components/atoms/LoadingSkeleton'
import {
  ControlForm,
  ControlInput,
  ControlRadioInput
} from '@/components/organisms/Control'
import { Pin } from '@/components/organisms/Pin'
import { P } from '@/components/utils/texts/P'
import {
  useGetMeQuery,
  UserCurrency,
  useSendEmailPinMutation,
  useUpdateEmailByPinMutation,
  useUpdateMeMutation
} from '@/external/graphql/generated'
import { popoverVar, refetchInvoiceVar } from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const AccountData: React.FC = () => {
  const [updateMe] = useUpdateMeMutation()
  const {
    state: { form }
  } = useForm<{ currency: UserCurrency, email: string, name: string }>()
  const { data, refetch, loading } = useGetMeQuery()
  const [sendEmailPin] = useSendEmailPinMutation()
  const [updateEmailByPin, { error }] = useUpdateEmailByPinMutation()
  const [checked, setChecked] = useState(data?.getMe.user.settings.currency)
  const [isPinOpen, setIsPinOpen] = useState(false)

  useEffect(() => {
    if (form.isSubmitted) {
      refetch().catch(() =>
        popoverVar.setPopover(new InternalError().message, 'error')
      )
    }
  }, [form.isSubmitted])

  useEffect(() => {
    setChecked(data?.getMe.user.settings.currency)
  }, [data])

  if (!data || loading) return <LoadingSkeleton amount={4} columns={4} />

  const {
    getMe: { user }
  } = data

  const isCurrencySame = form.data.currency === user.settings.currency
  const isEmailSame = form.data.email === user.personal.email
  const isNameSame = form.data.name === user.personal.name

  const submitHandler = async () => {
    const { data } = await updateMe({
      variables: {
        currency: isCurrencySame ? undefined : form.data.currency,
        email: isEmailSame ? undefined : form.data.email,
        name: isNameSame ? undefined : form.data.name
      }
    })

    if (form.data.email !== user.personal.email) {
      setIsPinOpen(true)
    }

    if (data) {
      const hasChanges = data.updateMe.__typename === 'UpdateMeHasChanges'

      if (
        hasChanges &&
        (!isNameSame || (!isCurrencySame && form.data.currency))
      ) {
        popoverVar.setPopover(
          'Seus dados foram atualizados com sucesso',
          'success'
        )
      }

      if (!hasChanges) {
        popoverVar.setPopover(
          'Você não fez nenhuma alteração, portanto seus dados não foram alterados ',
          'info'
        )
      }
    }

    refetchInvoiceVar.refetch()
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
    <div className={classes.accountData} data-testid="account-data">
      <div>
        <ControlForm submitHandler={submitHandler}>
          <div className={classes.accountDataForm}>
            <ControlInput
              defaultValue={user.personal.name}
              label="Seu nome"
              name="name"
              autoFocus
            />

            <ControlInput
              defaultValue={user.personal.email}
              label="Seu email"
              name="email"
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

          <div className={classes.accountDataButton}>
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
