import { mockVariables } from '..'

export const tokenFragmentMock = (type: 'access' | 'refresh') => ({
  [type]: mockVariables.token
})
