import { HttpLink } from '@apollo/client'

const httpLink = new HttpLink({ uri: import.meta.env.VITE_API_URL })

export default httpLink
