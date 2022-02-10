import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import { AccountDataView } from '..'

describe('AccountDataView', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<AccountDataView />)
    const accountDataView = screen.getByTestId('account-data-view')

    expect(accountDataView).toBeInTheDocument()
  })
})
