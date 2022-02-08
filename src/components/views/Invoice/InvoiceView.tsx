import { Invoice } from '@/components/templates/Invoice'
import { Layout } from '@/components/templates/Layout'

export const InvoiceView: React.FC = () => {
  return (
    <div data-testid="invoice-view">
      <Layout pageName="Faturas">
        <Invoice />
      </Layout>
    </div>
  )
}
