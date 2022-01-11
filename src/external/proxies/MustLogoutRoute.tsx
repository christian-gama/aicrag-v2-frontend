import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../graphql/reactiveVars/auth'

const MustLogoutRoute: React.FC = () => {
  const { isAuthenticated } = useAuth()

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default MustLogoutRoute
