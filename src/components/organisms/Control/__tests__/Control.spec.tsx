import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DateTime } from 'luxon'
import { popoverVar } from '@/external/graphql/reactiveVars'
import {
  formUtils,
  MockDate,
  renderWithProviders,
  setupTests
} from '@/tests/helpers'
import {
  ControlDateInput,
  ControlForm,
  ControlInput,
  ControlRadioInput,
  ControlSelectInput
} from '..'
import { makeMockValidation } from '@/tests/mocks'

describe('Control', () => {
  setupTests()

  describe('Form', () => {
    it('renders correctly', async () => {
      await renderWithProviders(
        <ControlForm submitHandler={jest.fn()}>
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )

      expect(formUtils.form).toBeInTheDocument()
    })

    it('calls submitHandler when submit', async () => {
      const submitHandlerSpy = jest.fn().mockReturnValue(Promise.resolve())
      await renderWithProviders(
        <ControlForm submitHandler={submitHandlerSpy}>
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )

      await formUtils.submitForm()

      expect(submitHandlerSpy).toHaveBeenCalled()
    })

    it('calls postSubmitFn after submiting', async () => {
      const postSubmitFnSpy = jest.fn()
      const submitHandlerSpy = jest.fn().mockReturnValue(postSubmitFnSpy)
      await renderWithProviders(
        <ControlForm submitHandler={submitHandlerSpy}>
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )

      await formUtils.submitForm()

      expect(submitHandlerSpy).toHaveBeenCalled()
      expect(postSubmitFnSpy).toHaveBeenCalled()
    })

    it('calls validator when submit with the correct data', async () => {
      const validatorSpy = jest.fn()
      await renderWithProviders(
        <ControlForm
          submitHandler={jest.fn()}
          validator={makeMockValidation(validatorSpy)}
        >
          <ControlInput name="title" label="Title" defaultValue="Any Value" />
        </ControlForm>
      )

      await formUtils.submitForm()

      expect(validatorSpy).toHaveBeenCalledWith('title', {
        title: 'Any Value'
      })
    })

    it('catches if submitHandler throws', async () => {
      const submitHandlerSpy = jest.fn().mockImplementation(() => {
        throw new Error()
      })
      await renderWithProviders(
        <ControlForm submitHandler={submitHandlerSpy}>
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )

      await formUtils.submitForm()

      expect(submitHandlerSpy).toHaveBeenCalled()
    })

    it('calls setPopover with the correct data if validation fails with an empty form', async () => {
      const setPopoverSpy = jest.spyOn(popoverVar, 'setPopover')
      await renderWithProviders(
        <ControlForm
          submitHandler={jest.fn()}
          validator={makeMockValidation(jest.fn().mockReturnValue('any_error'))}
        >
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )

      await formUtils.submitForm()

      expect(setPopoverSpy).toHaveBeenCalledWith(
        'N??o foi poss??vel continuar, pois h?? erros que precisam ser corrigidos',
        'error'
      )
    })

    it('calls setPopover with the correct data if validation succeeds', async () => {
      const setPopoverSpy = jest.spyOn(popoverVar, 'setPopover')
      await renderWithProviders(
        <ControlForm submitHandler={jest.fn()} successMessage="Success message">
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )

      await formUtils.submitForm()

      expect(setPopoverSpy).toHaveBeenCalledWith('Success message', 'success')
    })

    it('stops the loading state when catches an error', async () => {
      const submitHandlerSpy = jest.fn().mockImplementation(() => {
        throw new Error()
      })
      await renderWithProviders(
        <ControlForm submitHandler={submitHandlerSpy}>
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )

      await formUtils.submitForm()

      expect(formUtils.form).toHaveAttribute('data-loading', 'false')
    })

    it('stops the loading state when validation fails', async () => {
      const validateSpy = jest.fn().mockReturnValue('any_error')
      await renderWithProviders(
        <ControlForm
          submitHandler={jest.fn()}
          validator={makeMockValidation(validateSpy)}
        >
          <ControlInput name="title" label="Title" />
        </ControlForm>
      )

      await formUtils.submitForm()

      expect(formUtils.form).toHaveAttribute('data-loading', 'false')
    })
  })

  describe('ControlInput', () => {
    it('starts as readOnly', async () => {
      await renderWithProviders(
        <ControlForm submitHandler={jest.fn()}>
          <ControlInput label="Title" name="title" />
        </ControlForm>
      )
      const input = screen.getByTestId('base-input')

      expect(input).toHaveAttribute('readOnly')
    })

    it('displays an icon if icon is defined', async () => {
      await renderWithProviders(
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

    it('toggles the eye icon when clicking on it', async () => {
      await renderWithProviders(
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
      await renderWithProviders(
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
      it("has an error state if value is invalid and it's required", async () => {
        await renderWithProviders(
          <ControlForm
            submitHandler={jest.fn()}
            validator={makeMockValidation(
              jest.fn().mockReturnValue('any_error')
            )}
          >
            <ControlInput label="Title" name="title" required />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        fireEvent.blur(input)

        expect(input.className).toMatch(/state_error/gi)
      })

      it('has a success state if value is valid and not empty', async () => {
        await renderWithProviders(
          <ControlForm
            submitHandler={jest.fn()}
            validator={makeMockValidation(jest.fn())}
          >
            <ControlInput label="Title" name="title" />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        userEvent.type(input, 'any_value')
        fireEvent.blur(input)

        expect(input.className).toMatch(/state_success/gi)
      })

      it('calls onBlur function', async () => {
        const onBlurSpy = jest.fn()
        await renderWithProviders(
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
      it('has a default state even if value is invalid but it was did not blur yet', async () => {
        await renderWithProviders(
          <ControlForm
            submitHandler={jest.fn()}
            validator={makeMockValidation(
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

      it('has an error state if field was already touched and has an invalid value', async () => {
        await renderWithProviders(
          <ControlForm
            submitHandler={jest.fn()}
            validator={makeMockValidation(
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

      it('has a success state if value is valid', async () => {
        await renderWithProviders(
          <ControlForm
            submitHandler={jest.fn()}
            validator={makeMockValidation(jest.fn())}
          >
            <ControlInput label="Title" name="title" />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        userEvent.type(input, 'any_value')

        expect(input.className).toMatch(/state_success/gi)
      })

      it('calls onChange function', async () => {
        const onChangeSpy = jest.fn()
        await renderWithProviders(
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
      it('calls onFocus function', async () => {
        const onFocusSpy = jest.fn()
        await renderWithProviders(
          <ControlForm submitHandler={jest.fn()}>
            <ControlInput label="Title" name="title" onFocus={onFocusSpy} />
          </ControlForm>
        )
        const input = screen.getByTestId('base-input')

        fireEvent.focus(input)

        expect(onFocusSpy).toHaveBeenCalled()
      })

      it('removes the readOnly attribute', async () => {
        await renderWithProviders(
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

  describe('ControlDateInput', () => {
    it('starts as readOnly', async () => {
      await renderWithProviders(
        <ControlForm submitHandler={jest.fn()}>
          <ControlDateInput label="Title" name="title" />
        </ControlForm>
      )
      const input = screen.getByTestId('base-date-input')

      expect(input).toHaveAttribute('readOnly')
    })

    it('picks a date from calendar and display it in input', async () => {
      const mockDate = new MockDate(2022, 1, 1, 0, 0)
      mockDate.mock()
      await renderWithProviders(
        <ControlForm submitHandler={jest.fn()}>
          <ControlDateInput
            label="Title"
            name="title"
            defaultDate={DateTime.now().toMillis()}
          />
        </ControlForm>
      )
      const input = screen.getByTestId('base-date-input')
      const calendarDay = () => screen.getByTestId('15/01/2022 00:00')

      userEvent.click(input)
      userEvent.click(calendarDay())

      expect(input).toHaveValue('15/01/2022 00:00')

      mockDate.reset()
    })
  })

  describe('ControlSelectInput', () => {
    it('renders correctly', async () => {
      await renderWithProviders(
        <ControlSelectInput
          options={[{ label: 'any_name', value: 'any_name' }]}
          defaultValue="any_name"
          label="Any name"
          name="any_name"
        />
      )
      const input = screen.getByTestId('base-select-input')

      expect(input).toBeInTheDocument()
    })

    it('displays the default value correctly', async () => {
      await renderWithProviders(
        <ControlSelectInput
          options={[
            { label: 'any_name', value: 'any_name' },
            { label: 'any_name2', value: 'any_name2' }
          ]}
          defaultValue="any_name2"
          label="Any name"
          name="any_name"
        />
      )
      const input = screen.getByTestId('base-select-input')

      expect(input).toHaveValue('any_name2')
    })

    it('changes the value', async () => {
      await renderWithProviders(
        <ControlSelectInput
          options={[
            { label: 'any_name', value: 'any_name' },
            { label: 'any_name2', value: 'any_name2' }
          ]}
          defaultValue="any_name2"
          label="Any name"
          name="any_name"
        />
      )
      const input = screen.getByTestId('base-select-input')
      userEvent.selectOptions(input, 'any_name')

      expect(input).toHaveValue('any_name')
    })

    it('calls onChange if its defined', async () => {
      const onChangeSpy = jest.fn()
      await renderWithProviders(
        <ControlSelectInput
          onChange={onChangeSpy}
          options={[
            { label: 'any_name', value: 'any_name' },
            { label: 'any_name2', value: 'any_name2' }
          ]}
          defaultValue="any_name2"
          label="Any name"
          name="any_name"
        />
      )
      const input = screen.getByTestId('base-select-input')
      userEvent.selectOptions(input, 'any_name')

      expect(onChangeSpy).toHaveBeenCalled()
    })
  })

  describe('ControlRadioInput', () => {
    it('renders correctly', async () => {
      await renderWithProviders(
        <ControlRadioInput
          onChange={jest.fn()}
          value="any_name"
          label="Any name"
          name="any_name"
        />
      )
      const input = screen.getByTestId('base-radio-input')

      expect(input).toBeInTheDocument()
    })

    it('has input marked as check', async () => {
      await renderWithProviders(
        <ControlRadioInput
          onChange={jest.fn()}
          value="any_name"
          label="Any name"
          name="any_name"
        />
      )
      const input = screen.getByTestId('base-radio-input')

      userEvent.click(input)

      expect(input).toBeChecked()
    })
  })
})
