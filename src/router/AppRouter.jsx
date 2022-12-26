import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from '../auth'
import { Calendario } from "../calendar"

export const AppRouter = () => {

    //para ingresar a una u otra ruta si estoy o no autenticado
    const authStatus = 'authenticated';

    return (
        <Routes>
            {
                (authStatus === 'not-authenticated')
                    ? <Route path="/auth/*" element={<Login />} />
                    : <Route path="/*" element={<Calendario />} />
            }

            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
