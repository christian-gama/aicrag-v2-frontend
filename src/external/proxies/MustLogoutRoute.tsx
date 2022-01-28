import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../graphql/reactiveVars/authVar'

const MustLogoutRoute: React.FC = () => {
  const { isAuthenticated } = useAuth()

  return !isAuthenticated ? <Outlet /> : <Navigate replace to="/" />
}

export default MustLogoutRoute
