import { FC } from "react";
import { useAuth } from "../../auth/AuthProvider";

const ModalEditarUsuario: FC = () => {

    const auth = useAuth()

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
                <div className="bg-white p-8 rounded-[13px]">
                    <form className="flex flex-col">
                        <h1 className="text-2   xl font-bold mb-6 px-[5em] flex justify-center text-black">Editar usuario</h1>
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
                            <input
                                className="text-sm border rounded-md text-black bg-white p-2 mb-2 w-full"
                                type="file"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export { ModalEditarUsuario }