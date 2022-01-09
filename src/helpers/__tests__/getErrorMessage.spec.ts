import getErrorMessage from '../getErrorMessage'
import translateError from '../translateError'

describe('getErrorMessage', () => {
  it('should return the graphql error message', () => {
    const error = {
      networkError: {
        result: {
          errors: [
            {
              message: 'GraphQL error message'
            }
          ]
        }
      }
    }

    expect(getErrorMessage(error)).toBe(translateError('GraphQL error message'))
  })

  it('should return the network error message', () => {
    const error = {
      networkError: {
        message: 'Network error message'
      }
    }

    expect(getErrorMessage(error)).toBe('Houve um problema com a conexão, tente novamente mais tarde')
  })

  it('should return the default error message', () => {
    const error = {
      message: 'Error message'
    }

    expect(getErrorMessage(error)).toBe('Error message')
  })

  it('should return the generic error if extension code is BAD_USER_INPUT', () => {
    const error = {
      networkError: {
        result: {
          errors: [
            {
              extensions: {
                code: 'BAD_USER_INPUT'
              }
            }
          ]
        }
      }
    }

    expect(getErrorMessage(error)).toBe('Algo deu errado, tente novamente mais tarde')
  })
})
