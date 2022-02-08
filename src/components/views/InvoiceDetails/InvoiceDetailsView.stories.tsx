import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { getInvoiceByMonthMock } from '@/tests/mocks/queries'
import { InvoiceDetailsView as InvoiceDetailsViewComponent } from './InvoiceDetailsView'

export default {
  component: InvoiceDetailsViewComponent,
  title: 'views/Invoice Details View',
  decorators: [
    (story) => (
      <AllProviders apolloMocks={[getInvoiceByMonthMock()]}>
        {story()}
      </AllProviders>
    )
  ]
} as ComponentMeta<typeof InvoiceDetailsViewComponent>

export const InvoiceDetailsView: ComponentStoryObj<
  typeof InvoiceDetailsViewComponent
> = {}
