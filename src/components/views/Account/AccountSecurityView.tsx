import { FormProvider } from '@/context/models/form'
import { Account, AccountSecurity } from '@/components/templates/Account'
import { Layout } from '@/components/templates/Layout'

export const AccountSecurityView: React.FC = () => {
  return (
    <div data-testid="account-security-view">
      <Layout pageName="Minha conta">
        <FormProvider>
          <Account>
            <AccountSecurity />
          </Account>
        </FormProvider>
      </Layout>
    </div>
  )
}
