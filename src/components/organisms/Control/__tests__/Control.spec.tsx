import makeValidationMock from '@/../tests/mocks/validator.mock'
import {
  fireEvent,
  screen,
  act,
  cleanup,
  waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { popoverVar } from '@/external/graphql/reactiveVars/popoverVar'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import ControlForm from '../ControlForm'
import ControlInput from '../ControlInput'

describe('Control', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  describe('Form', () => {
    it('renders correctly', () => {
      renderWithProviders(
        <ControlForm submitHandler={jest.fn()}>
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )
      const form = screen.getByTestId('form')

      expect(form).toBeInTheDocument()
    })

    it('calls submitHandler when submit', async () => {
      const submitHandlerSpy = jest.fn().mockReturnValue(Promise.resolve())
      renderWithProviders(
        <ControlForm submitHandler={submitHandlerSpy}>
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )
      const form = screen.getByTestId('form')

      act(() => {
        fireEvent.submit(form)
      })

      await waitFor(() => expect(submitHandlerSpy).toHaveBeenCalled())
    })

    it('calls validator when submit with the correct data', async () => {
      const validatorSpy = jest.fn()
      renderWithProviders(
        <ControlForm
          submitHandler={jest.fn()}
          validator={makeValidationMock(validatorSpy)}
        >
          <ControlInput name="title" label="Title" defaultValue="Any Value" />
        </ControlForm>
      )
      const form = screen.getByTestId('form')

      act(() => {
        fireEvent.submit(form)
      })

      await waitFor(() =>
        expect(validatorSpy).toHaveBeenCalledWith('title', {
          title: 'Any Value'
        })
      )
    })

    it('catches if submitHandler throws', async () => {
      const submitHandlerSpy = jest.fn().mockImplementation(() => {
        throw new Error()
      })
      renderWithProviders(
        <ControlForm submitHandler={submitHandlerSpy}>
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )
      const form = screen.getByTestId('form')

      act(() => {
        fireEvent.submit(form)
      })

      await waitFor(() => expect(submitHandlerSpy).toHaveBeenCalled())
    })

    it('calls setPopover with the correct data if validation fails with an empty form', () => {
      const setPopoverSpy = jest.spyOn(popoverVar, 'setPopover')
      renderWithProviders(
        <ControlForm
          submitHandler={jest.fn()}
          validator={makeValidationMock(jest.fn().mockReturnValue('any_error'))}
        >
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )
      const form = screen.getByTestId('form')

      act(() => {
        fireEvent.submit(form)
      })

      expect(setPopoverSpy).toHaveBeenCalledWith(
        'Não foi possível continuar, pois há erros que precisam ser corrigidos',
        'error'
      )
    })

    it('calls setPopover with the correct data if validation succeeds', async () => {
      const setPopoverSpy = jest.spyOn(popoverVar, 'setPopover')
      renderWithProviders(
        <ControlForm submitHandler={jest.fn()} successMessage="Success message">
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )
      const form = screen.getByTestId('form')

      act(() => {
        fireEvent.submit(form)
      })

      await waitFor(() =>
        expect(setPopoverSpy).toHaveBeenCalledWith('Success message', 'success')
      )
    })
  })

  describe('Input', () => {
    it('starts as readOnly', () => {
      renderWithProviders(
        <ControlForm submitHandler={jest.fn()}>
          <ControlInput label="Title" name="title" />
        </ControlForm>
      )
      const input = screen.getByTestId('base-input')

      expect(input).toHaveAttribute('readOnly')
    })

    it('displays an icon if icon is defined', () => {
      renderWithProviders(
        <ControlForm submitHandler={jest.fn()}>
          <ControlInput
            icon={<div data-testid="icon">Icon</div>}
            label="Title"
            name="title"
          />
        </ControlForm>
      )
      const icon = screen.getByTestId('icon')

      expect(icon).toBeInTheDocument()
    })

    it('toggles the eye icon when clicking on it', () => {
      renderWithProviders(
        <ControlForm submitHandler={jest.fn()}>
          <ControlInput type="password" label="Title" name="title" />
        </ControlForm>
      )
      const eyeIcon = (state: 'open' | 'closed') =>
        screen.getByTestId(`eye-${state}-icon`)

      // Open
      userEvent.click(eyeIcon('open'))

      expect(eyeIcon('closed')).toBeInTheDocument()

      // Closed
      userEvent.click(eyeIcon('closed'))

      expect(eyeIcon('open')).toBeInTheDocument()
    })

    it('starts with password type and changes to text when click on eye icon', async () => {
      renderWithProviders(
        <ControlForm submitHandler={jest.fn()}>
          <ControlInput type="password" label="Title" name="title" />
        </ControlForm>
      )
      const openEyeIcon = screen.getByTestId('eye-open-icon')
      const input = screen.getByTestId('base-input')

      expect(input).toHaveAttribute('type', 'password')

      userEvent.click(openEyeIcon)

      expect(input).toHaveAttribute('type', 'text')
    })

    describe('when triggers onBlur', () => {
      it('has an error state if value is invalid', () => {
        renderWithProviders(
          <ControlForm
            submitHandler={jest.fn()}
            validator={makeValidationMock(
              jest.fn().mockReturnValue('any_error')
            )}
          >
            <ControlInput label="Title" name="title" />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        fireEvent.blur(input)

        expect(input.className).toMatch(/state_error/gi)
      })

      it('has a success state if value is valid and not empty', () => {
        renderWithProviders(
          <ControlForm
            submitHandler={jest.fn()}
            validator={makeValidationMock(jest.fn())}
          >
            <ControlInput label="Title" name="title" />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        userEvent.type(input, 'any_value')
        fireEvent.blur(input)

        expect(input.className).toMatch(/state_success/gi)
      })

      it('calls onBlur function', () => {
        const onBlurSpy = jest.fn()
        renderWithProviders(
          <ControlForm submitHandler={jest.fn()}>
            <ControlInput label="Title" name="title" onBlur={onBlurSpy} />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        fireEvent.blur(input)

        expect(onBlurSpy).toHaveBeenCalled()
      })
    })

    describe('when triggers onChange', () => {
      it('has a default state even if value is invalid but it was did not blur yet', () => {
        renderWithProviders(
          <ControlForm
            submitHandler={jest.fn()}
            validator={makeValidationMock(
              jest.fn().mockReturnValue('any_error')
            )}
          >
            <ControlInput label="Title" name="title" />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        userEvent.type(input, 'any_value')

        expect(input.className).toMatch(/state_default/gi)
      })

      it('has an error state if field was already touched and has an invalid value', () => {
        renderWithProviders(
          <ControlForm
            submitHandler={jest.fn()}
            validator={makeValidationMock(
              jest.fn().mockReturnValue('any_error')
            )}
          >
            <ControlInput label="Title" name="title" />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        fireEvent.blur(input)
        userEvent.type(input, 'any_value')

        expect(input.className).toMatch(/state_error/gi)
      })

      it('has a success state if value is valid', () => {
        renderWithProviders(
          <ControlForm
            submitHandler={jest.fn()}
            validator={makeValidationMock(jest.fn())}
          >
            <ControlInput label="Title" name="title" />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        userEvent.type(input, 'any_value')

        expect(input.className).toMatch(/state_success/gi)
      })

      it('calls onChange function', () => {
        const onChangeSpy = jest.fn()
        renderWithProviders(
          <ControlForm submitHandler={jest.fn()}>
            <ControlInput label="Title" name="title" onChange={onChangeSpy} />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        userEvent.type(input, 'any_value')

        expect(onChangeSpy).toHaveBeenCalled()
      })
    })

    describe('when triggers onFocus', () => {
      it('calls onFocus function', () => {
        const onFocusSpy = jest.fn()
        renderWithProviders(
          <ControlForm submitHandler={jest.fn()}>
            <ControlInput label="Title" name="title" onFocus={onFocusSpy} />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        fireEvent.focus(input)

        expect(onFocusSpy).toHaveBeenCalled()
      })

      it('removes the readOnly attribute', () => {
        renderWithProviders(
          <ControlForm submitHandler={jest.fn()}>
            <ControlInput label="Title" name="title" />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        fireEvent.focus(input)

        expect(input).not.toHaveAttribute('readOnly')
      })
    })
  })
})
