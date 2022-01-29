import { HttpLink } from '@apollo/client'

export const httpLink = new HttpLink({ uri: import.meta.env.VITE_API_URL })
