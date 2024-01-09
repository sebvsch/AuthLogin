import { FC } from 'react'
import { useAuth } from '../auth/AuthProvider'
import { Link } from 'react-router-dom'

const AsideMenu: FC = () => {

    const auth = useAuth()

    const handleLogout = async () => {
        await auth.logoutRequest()
        window.location.reload()
    }

    return (
        <>
            <aside>
                <div className="h-full w-60 p-3 bg-gradient-to-t from-gray-800 via-gray-900 bg-gray-950 ">
                    <ul className="space-y-2 font-semibold">
                        <li className="mb-7 text-white">
                            <div className='flex items-center gap-3'>
                                <img className='rounded-full w-8 h-8 bg-white' src={auth.userData?.avatar} alt='Foto de Perfil' />
                                <span className='text-sm'>{auth.userData?.name}</span>
                            </div>
                        </li>
                        <li>
                            <Link to="/dashboard" className="flex items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                    <path fill="#fff" d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path fill="#fff" d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3 text-sm">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/perfil" className="flex items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="#fff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                </svg>
                                <span className="ms-3 text-sm">Perfil</span>
                            </Link>
                        </li>
                        <div> 
                            <li>
                                <button onClick={handleLogout} className="flex items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="#fff" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                                    </svg>
                                    <span className="ms-3 text-sm">Cerrar Sesión</span>
                                </button>
                            </li>
                        </div>
                    </ul>
                </div>
            </aside >
        </>
    )
}

export { AsideMenu }