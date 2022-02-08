import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { getAllInvoicesMock } from '@/tests/mocks/queries'
import { Invoice } from './Invoice'

export default {
  component: Invoice,
  title: 'templates/Invoice',
  decorators: [
    (story) => (
      <AllProviders apolloMocks={[getAllInvoicesMock()]}>
        {story()}
      </AllProviders>
    )
  ]
} as ComponentMeta<typeof Invoice>

export const Default: ComponentStoryObj<typeof Invoice> = {}
