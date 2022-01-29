import { render, cleanup, screen } from '@testing-library/react'
import { InfoCircleIcon } from '..'

describe('InfoCircleIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<InfoCircleIcon />)
    const infoCircleIcon = screen.getByTestId('info-circle-icon')

    expect(infoCircleIcon).toBeInTheDocument()
  })
})
