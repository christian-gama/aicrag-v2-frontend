import { Invoice, InvoiceFilter } from '@/components/templates/Invoice'
import { Layout } from '@/components/templates/Layout'

export const InvoiceView: React.FC = () => {
  return (
    <div data-testid="invoice-view">
      <Layout pageName="Faturas">
        <div style={{ width: 'min-content', margin: '0 auto' }}>
          <InvoiceFilter />

          <Invoice />
        </div>
      </Layout>
    </div>
  )
}
