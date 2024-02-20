import { FC } from "react";
import { useAuth } from "../../auth/AuthProvider";

const ModalEditarUsuario: FC = () => {

    const auth = useAuth()

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
                <div className="bg-white p-8 rounded-[13px]">
                    <form className="flex flex-col">
                        <h1 className="text-2xl font-semibold mb-6 px-[5em] flex justify-center text-black">Editar usuario</h1>
                        {/* <div>
                            <img className="h-20 w-20 rounded-full border border-white/60 shadow-lg" src={auth.userData?.avatar} alt="Foto perfil" />
                        </div> */}
                        <div>
                            <label className="block text-sm mb-2 text-black/50">Nombre:</label>
                            <input
                                className="text-sm border rounded-md text-black bg-white p-2 mb-2 w-full"
                                defaultValue={auth.userData?.name}
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2 text-black/50">Usuario:</label>
                            <input
                                className="text-sm border rounded-md text-black bg-white p-2 mb-2 w-full"
                                defaultValue={auth.userData?.username}
                                type="text"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2 text-black/50">Email:</label>
                            <input
                                className="text-sm border rounded-md text-black bg-white p-2 mb-2 w-full"
                                defaultValue={auth.userData?.email}
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2 text-black/50">Cambiar Imagen:</label>
                            <input type="file" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-100 dark:border-gray-200 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600  file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-gray-300 dark:file:text-gray-500 " />
                        </div>
                        <div className="text-center mt-8">
                            <button className="bg-gradient-to-tr from-slate-500 via-slate-600 to-slate-700 py-1 px-4 rounded-full text-white font-medium">
                                <span className="text-sm">
                                    Guardar
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export { ModalEditarUsuario }