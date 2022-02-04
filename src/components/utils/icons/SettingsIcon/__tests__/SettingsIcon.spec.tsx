import { render, cleanup, screen } from '@testing-library/react'
import { SettingsIcon } from '..'

describe('SettingsIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<SettingsIcon />)
    const settingsIcon = screen.getByTestId('settings-icon')

    expect(settingsIcon).toBeInTheDocument()
  })
})
