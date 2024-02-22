import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes as Rutas } from 'react-router-dom'
import PrivateLayout from "../layout/PrivateLayout";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { PerfilUsuario } from "../pages/PerfilUsuario";
import { Registrar } from "../pages/Registrar";
import { Usuarios } from "../pages/Usuarios";
import PrivateRoutes from "./PrivateRoutes";
import PrivateRoutesAfterAuth from "./PrivateRoutesAfterAuth";

const AppRoutes: FC = () => {
    return (
        <>
            <BrowserRouter>
                <Rutas >
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
                </Rutas>
            </BrowserRouter>
        </>
    )
}

export { AppRoutes }