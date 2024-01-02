import { FC, useEffect, useState } from "react";
import { pb } from "../pb";
import { DataUser } from "../Servicios";
import { useAuth } from "../auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Dashboard: FC = () => {

    const auth = useAuth()
    const navigate = useNavigate();

    const [userData, setUserData] = useState<DataUser | null>(null);

    const getUserData = async () => {
        try {
            const authData = pb.authStore.model
            if (!authData) throw new Error("No se ha autenticado")
            const userData: DataUser = {
                id: authData.id,
                username: authData.username,
                email: authData.email,
                name: authData.name,
                avatar: authData.avatar
            }
            setUserData(userData);
        } catch (err) {
            console.log(err);
            setUserData(null);
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    const handleLogout = async () => {
        await auth.logoutRequest()
        window.location.reload()
    }

    return (
        <>
            <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
                <div className="h-full px-3 py-4 overflow-y-auto bg-indigo-700 rounded-r-lg">
                    <ul className="space-y-2 font-semibold">
                        <li className="mb-7 text-white text-2xl">
                            <div>
                                <span>Hola,</span>
                            </div>
                            <div>
                                <span>{userData?.name}</span>
                            </div>
                        </li>

                        <li>
                            <Link to="/dashboard" className="flex items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                    <path fill="#fff" d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path fill="#fff" d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/perfil" className="flex items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="#fff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                </svg>
                                <span className="ms-3">Perfil</span>
                            </Link>
                        </li>

                        <li>
                            <button onClick={handleLogout} className="flex items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#fff" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                                </svg>
                                <span className="ms-3">Cerrar Sesión</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside >
        </>
    )
}

export { Dashboard }