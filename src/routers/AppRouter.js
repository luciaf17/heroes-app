import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/login" element={<LoginScreen />} />
            <Route exact path="/*" element={<DashboardRoutes />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter