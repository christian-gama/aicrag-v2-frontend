import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { getInvoiceByMonthMock } from '@/tests/mocks/queries'
import { InvoiceDetails as InvoiceDetailsComponent } from './InvoiceDetails'

export default {
  component: InvoiceDetailsComponent,
  title: 'templates/Invoice Details',
  decorators: [
    (story) => (
      <AllProviders apolloMocks={[getInvoiceByMonthMock()]}>
        {story()}
      </AllProviders>
    )
  ]
} as ComponentMeta<typeof InvoiceDetailsComponent>

export const InvoiceDetails: ComponentStoryObj<typeof InvoiceDetailsComponent> =
  {}
