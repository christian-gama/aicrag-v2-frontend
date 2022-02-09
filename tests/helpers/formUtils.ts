import { fireEvent, screen } from '@testing-library/dom'
import { act } from 'react-dom/test-utils'
import { waitFetch } from '.'

class FormUtils {
  get form () {
    return screen.getByTestId('form')
  }

  async submitForm (waitMs?: number) {
    await act(async () => {
      fireEvent.submit(this.form)
      await waitFetch(waitMs)
    })
  }
}

export const formUtils = new FormUtils()
