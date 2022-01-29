import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../graphql/reactiveVars'

export const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, isPartiallyAuthenticated } = useAuth()

  return isAuthenticated && !isPartiallyAuthenticated
    ? (
    <Outlet />
      )
    : (
    <Navigate replace to="/entry/sign-in" />
      )
}
