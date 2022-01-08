import { onError } from '@apollo/client/link/error'

const tokenErrorLink = onError(({ networkError }) => {})

export default tokenErrorLink
