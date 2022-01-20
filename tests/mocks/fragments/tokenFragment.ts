import variablesMock from '../variables.mock'

const tokenFragmentMock = (type: 'access' | 'refresh') =>
  ({
    [type]: variablesMock.token
  } as const)

export default tokenFragmentMock
