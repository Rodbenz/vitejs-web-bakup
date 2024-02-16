import React from 'react'
import App from '../App'
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'

export default function AppRoutes() {
    const { BASE_URL } = import.meta.env
    return (
        <BrowserRouter basename={BASE_URL}>
            <Routes>
                <Route element={<App />}>
                    {/* <Route path='error/*' element={<ErrorsPage />} />
                        <Route path='logout' element={<Logout />} /> */}
                    {/* {currentUser ? (
                        <>
                            <Route path='/*' element={<PrivateRoutes />} />
                            <Route index element={<Navigate to='/apps/user-management' />} />
                        </>
                        ) : (
                        <>
                            <Route path='auth/*' element={<AuthPage />} />
                            <Route path='*' element={<Navigate to='/auth' />} />
                        </>
                    )} */}
                    <Route path='/*' element={<PrivateRoutes />} />
                    <Route index element={<Navigate to='/apps' />} />
                    {/* <Route path='auth/*' element={<AuthPage />} />
                    <Route path='*' element={<Navigate to='/auth' />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
