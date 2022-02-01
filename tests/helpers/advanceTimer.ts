import { act } from '@testing-library/react'

export const advanceTimer = () => {
  act(() => {
    jest.advanceTimersByTime(5 * 60 * 1000)
  })
}
