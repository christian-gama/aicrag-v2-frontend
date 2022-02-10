import { authVar } from '@/external/graphql/reactiveVars'
import { mockVariables } from '../mocks'

export const setUser = (user?: {
  email?: string
  id?: string
  name?: string
  currency?: 'BRL' | 'USD'
}) =>
  authVar.setUser({
    personal: {
      email: user?.email ?? mockVariables.email,
      id: user?.id ?? mockVariables.uuid,
      name: user?.name ?? mockVariables.name
    },
    settings: {
      role: mockVariables.role.user,
      currency: user?.currency ?? 'BRL'
    }
  })
