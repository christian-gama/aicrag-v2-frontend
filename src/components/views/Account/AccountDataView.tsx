import { FormProvider } from '@/context/models/form'
import { Account, AccountData } from '@/components/templates/Account'
import { Layout } from '@/components/templates/Layout'

export const AccountDataView: React.FC = () => {
  return (
    <div data-testid="account-data-view">
      <Layout pageName="Minha conta">
        <FormProvider>
          <Account>
            <AccountData />
          </Account>
        </FormProvider>
      </Layout>
    </div>
  )
}
