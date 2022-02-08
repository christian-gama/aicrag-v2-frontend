import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { getAllInvoicesMock } from '@/tests/mocks/queries'
import { InvoiceView as InvoiceViewComponent } from './InvoiceView'

export default {
  component: InvoiceViewComponent,
  title: 'views/Invoice View',
  decorators: [
    (story) => (
      <AllProviders apolloMocks={[getAllInvoicesMock()]}>
        {story()}
      </AllProviders>
    )
  ]
} as ComponentMeta<typeof InvoiceViewComponent>

export const InvoiceView: ComponentStoryObj<typeof InvoiceViewComponent> = {}
