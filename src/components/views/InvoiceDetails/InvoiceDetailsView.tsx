import { useNavigate } from 'react-router-dom'
import {
  InvoiceDetails,
  InvoiceDetailsFilter
} from '@/components/templates/InvoiceDetails'
import { Layout } from '@/components/templates/Layout'

export const InvoiceDetailsView: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div data-testid="invoice-details-view">
      <Layout
        pageName="Faturas/Detalhe"
        backHandler={() => navigate('/invoice')}
      >
        <div style={{ width: 'min-content', margin: '0 auto' }}>
          <InvoiceDetailsFilter />

          <InvoiceDetails />
        </div>
      </Layout>
    </div>
  )
}
