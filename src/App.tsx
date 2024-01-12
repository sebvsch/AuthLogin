import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './auth/AuthProvider'
import PrivateRoutes from './routes/PrivateRoutes'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import PrivateRoutesAfterAuth from './routes/PrivateRoutesAfterAuth'
import { Registrar } from './pages/Registrar'
import { PerfilUsuario } from './pages/PerfilUsuario'
import PrivateLayout from './layout/PrivateLayout'
import { Usuarios } from './pages/Usuarios'

function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes >
                        <Route element={<PrivateRoutes />}>
                            <Route element={<PrivateLayout />}>
                                <Route path='/dashboard' element={<Dashboard />} />
                                <Route path='/perfil' element={<PerfilUsuario />} />
                                <Route path='/usuarios' element={<Usuarios />} />
                            </Route>
                        </Route>
                        <Route element={<PrivateRoutesAfterAuth />}>
                            <Route path='/login' element={<Login />} />
                            <Route path='/registrar' element={<Registrar />} />
                            <Route index element={<Navigate to="/login" />} />
                        </Route>
                        <Route path='*' element={<h1 className='text-5xl text-gray-300 font-bold flex justify-center pt-64'>404 Not Found</h1>} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default App