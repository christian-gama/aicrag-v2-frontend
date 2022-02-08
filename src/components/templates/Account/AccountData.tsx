import { useContext, useEffect, useState } from 'react'
import { InternalError } from '@/services/errors'
import { FormContext } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { LoadingSkeleton } from '@/components/atoms/LoadingSkeleton'
import {
  ControlForm,
  ControlInput,
  ControlRadioInput
} from '@/components/organisms/Control'
import { P } from '@/components/utils/texts/P'
import {
  useGetMeQuery,
  UserCurrency,
  useUpdateMeMutation
} from '@/external/graphql/generated'
import { popoverVar, refetchInvoiceVar } from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const AccountData: React.FC = () => {
  const [updateMe] = useUpdateMeMutation()
  const {
    state: { form }
  } = useContext(FormContext)
  const { data, refetch, loading } = useGetMeQuery()
  const [checked, setChecked] = useState(data?.getMe.user.settings.currency)

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

  const submitHandler = async () => {
    await updateMe({
      variables: {
        currency:
          form.data.currency === user.settings.currency
            ? undefined
            : form.data.currency,

        email:
          form.data.email === user.personal.email ? undefined : form.data.email,

        name: form.data.name === user.personal.name ? undefined : form.data.name
      }
    })

    refetchInvoiceVar.refetch()
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
    </div>
  )
}
