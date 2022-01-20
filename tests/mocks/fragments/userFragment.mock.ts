const userFragmentMock = {
  user: {
    personal: {
      email: 'any@email.com',
      id: 'any-id',
      name: 'Any Name'
    },
    settings: {
      currency: 'BRL'
    }
  }
} as const

export default userFragmentMock
