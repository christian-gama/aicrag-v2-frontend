import { act } from '@testing-library/react'
import sleep from './sleep'

const waitFetch = async (timeout?: number) => {
  await act(async () => {
    await sleep(timeout)
  })
}

export default waitFetch
