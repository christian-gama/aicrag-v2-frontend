import { useNavigate } from 'react-router-dom'
import { InvoiceDetails } from '@/components/templates/InvoiceDetails'
import { Layout } from '@/components/templates/Layout'

export const InvoiceDetailsView: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div data-testid="invoice-details-view">
      <Layout
        pageName="Faturas/Detalhe"
        backHandler={() => navigate('/invoice')}
      >
        <InvoiceDetails />
      </Layout>
    </div>
  )
}
