import { renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { ConfirmEmailView } from '..'

describe('ConfirmAccountView', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<ConfirmEmailView />)
    const confirmEmailView = screen.getByTestId('confirm-email-view')

    expect(confirmEmailView).toBeInTheDocument()
  })
})
