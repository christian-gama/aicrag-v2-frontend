import { act } from '@testing-library/react'

const advanceTimer = () => {
  act(() => {
    jest.advanceTimersByTime(5 * 60 * 1000)
  })
}

export default advanceTimer
