import { ApolloError } from '@apollo/client'
import { screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pin } from '..'
import { useWindowDimensions } from '@/components/_hooks'
import { makeMailerCountdownStorage } from '@/external/factories/storage/mailerCountdown'
import { renderWithProviders, setupTests, waitFetch } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'

const mockFunction = jest.fn()
const mockLink = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockFunction,
  Link: (props: any) => {
    mockLink(props)

    return <>BackIcon</>
  }
}))

const mockProps = jest.fn()
jest.mock('../../../atoms/Steps', () => ({
  Steps: (props: any) => {
    mockProps(props)

    return <>Steps</>
  }
}))

jest.mock('../../../_hooks/useWindowDimensions')
const mockUseWindowDimensions = useWindowDimensions as jest.Mock

describe('Pin', () => {
  setupTests()
  const mailerCountdownStorage = makeMailerCountdownStorage()

  afterEach(() => {
    mockUseWindowDimensions.mockReset()
    mailerCountdownStorage.reset()
  })

  beforeEach(() => {
    mockUseWindowDimensions.mockReturnValue({ width: 1920, height: 1080 })
  })

  it('renders correctly', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        stepName=""
        isPage
        to="/"
      />
    )
    const pin = screen.getByTestId('pin')

    expect(pin).toBeInTheDocument()
  })

  it('redirects to the correct page when clicking on Link', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        stepName=""
        isPage
        to="/"
      />
    )
    const link = screen.getByText(/backicon/i)

    userEvent.click(link)

    expect(mockLink).toHaveBeenCalledWith({
      children: expect.anything(),
      'aria-label': expect.anything(),
      to: '/'
    })
  })

  it('does not render if isOpen is false', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        isPage={false}
        isOpen={false}
        stepName=""
      />
    )
    const pin = screen.queryByTestId('pin')

    expect(pin).not.toBeInTheDocument()
  })

  it('closes when clicks on Link if it is not a page', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        isPage={false}
        stepName=""
        isOpen
      />
    )
    const back = screen.getByTestId('nav-header-back')

    userEvent.click(back)

    expect(screen.queryByTestId('pin')).not.toBeInTheDocument()
  })

  it('calls Steps with responsive props', async () => {
    mockUseWindowDimensions.mockReturnValue({ width: 520, height: 599 })
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        isPage={false}
        stepName=""
        isOpen
      />
    )

    expect(mockProps).toHaveBeenCalledWith({
      direction: 'row',
      gap: '14rem',
      steps: expect.anything()
    })
  })

  it('accepts only 1 character per input', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        isPage={false}
        stepName=""
        isOpen
      />
    )
    const [input] = screen.getAllByTestId('pin-input')

    userEvent.type(input, '123')

    expect(input).toHaveValue('1')
  })

  it('does not paste if value length is lesser than 5', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        isPage={false}
        stepName=""
        isOpen
      />
    )
    const inputs = screen.getAllByTestId('pin-input')

    userEvent.paste(inputs[0], '123')

    expect(inputs[0]).toHaveValue('')
    expect(inputs[1]).toHaveValue('')
    expect(inputs[2]).toHaveValue('')
    expect(inputs[3]).toHaveValue('')
    expect(inputs[4]).toHaveValue('')
  })

  it('focus in the next input when press ArrowRight or Delete', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        isPage={false}
        stepName=""
        isOpen
      />
    )
    const inputs = screen.getAllByTestId('pin-input')

    fireEvent.keyDown(inputs[0], { key: 'ArrowRight' })
    fireEvent.keyDown(inputs[1], { key: 'Delete' })

    expect(inputs[2]).toHaveFocus()
  })

  it('does not focus in the next input if index is equal to 4', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        isPage={false}
        stepName=""
        isOpen
      />
    )
    const inputs = screen.getAllByTestId('pin-input')

    userEvent.type(inputs[4], '1')

    expect(inputs[4]).toHaveFocus()
  })

  it('focus in the previous input when press ArrowLeft or Backspace', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        isPage={false}
        stepName=""
        isOpen
      />
    )
    const inputs = screen.getAllByTestId('pin-input')

    fireEvent.keyDown(inputs[2], { key: 'ArrowLeft' })
    fireEvent.keyDown(inputs[1], { key: 'Backspace' })

    expect(inputs[0]).toHaveFocus()
  })

  it('does not focus in the previous input if index is equal to 0', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        isPage={false}
        stepName=""
        isOpen
      />
    )
    const inputs = screen.getAllByTestId('pin-input')

    fireEvent.keyDown(inputs[0], { key: 'ArrowLeft' })

    expect(inputs[0]).toHaveFocus()
  })

  it('deletes the input value when press Backspace', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        isPage={false}
        stepName=""
        isOpen
      />
    )
    const inputs = screen.getAllByTestId('pin-input')

    userEvent.type(inputs[1], '1')
    userEvent.type(inputs[1], '{backspace}')

    expect(inputs[1]).toHaveValue('')
    expect(inputs[1]).toHaveFocus()
  })

  it('focus and delete the previous input value if press Backspace in an empty input', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        isPage={false}
        stepName=""
        isOpen
      />
    )
    const inputs = screen.getAllByTestId('pin-input')

    userEvent.type(inputs[0], '1')
    userEvent.type(inputs[1], '{backspace}')

    expect(inputs[0]).toHaveValue('')
    expect(inputs[0]).toHaveFocus()
  })

  it('disables the button when form is submitted', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        stepName=""
        isPage
        to="/"
      />
    )
    const button = screen.getByRole('button', { name: /reenviar/i })
    const inputs = screen.getAllByTestId('pin-input')
    userEvent.paste(inputs[0], mockVariables.pin)
    await waitFetch()

    expect(button).toBeDisabled()
  })

  it('catches the error if submitHandler throws and should not disable the button', async () => {
    await renderWithProviders(
      <Pin
        error={new ApolloError({})}
        mailerHandler={jest.fn()}
        stepName=""
        isPage
        to="/"
        submitHandler={jest.fn(() => {
          throw new Error()
        })}
      />
    )
    const button = screen.getByRole('button', { name: /reenviar/i })
    const inputs = screen.getAllByTestId('pin-input')

    userEvent.paste(inputs[0], mockVariables.pin)
    await waitFetch()

    expect(button).not.toBeDisabled()
  })

  it('disables button when resend email', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        stepName=""
        isPage
        to="/"
      />
    )
    const button = screen.getByText(/reenviar/gi)

    userEvent.click(button)

    expect(button).toBeDisabled()
  })

  it('starts a countdown after resending an email', async () => {
    await renderWithProviders(
      <Pin
        mailerHandler={jest.fn()}
        submitHandler={jest.fn()}
        stepName=""
        isPage
        to="/"
      />
    )
    const button = screen.getByText(/reenviar/gi)

    userEvent.click(button)
    await waitFetch()

    expect(button.textContent).toMatch(/\d+/gi)
  })
})
