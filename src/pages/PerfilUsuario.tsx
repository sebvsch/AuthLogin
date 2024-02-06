import { FC, useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { ModalEditarUsuario } from "../components/modals/ModalEditarUsuario";

const PerfilUsuario: FC = () => {

    const auth = useAuth()

    const [editarUsuario, setEditarUsuario] = useState(false)

    return (
        <>
            <div className="p-3">
                <div>
                    <div className="border border-black/5 p-9 rounded-2xl" style={{ boxShadow: '0px 0px 11px 0px rgba(0,0,0,0.1)' }}>
                        <div>
                            <img className="h-28 w-28 rounded-full border border-white/60 shadow-lg" src={auth.userData?.avatar} alt="Foto de Perfil" />
                        </div>
                        <div className="text-sm  space-y-1 mt-2">
                            <div>
                                <label className="text-gray-900">Nombre: </label>
                                <span className="text-gray-900 font-semibold">{auth.userData?.name}</span>
                            </div>
                            <div>
                                <label className="text-gray-900">Usuario: </label>
                                <span className="text-gray-900 font-semibold">{auth.userData?.username}</span>
                            </div>
                            <div>
                                <label className="text-gray-900">Email: </label>
                                <span className="text-gray-900 font-semibold">{auth.userData?.email}</span>
                            </div>
                            <div>
                                <button onClick={() => setEditarUsuario(true)} className="bg-gradient-to-tr from-slate-500 via-slate-600 to-slate-700 py-1 px-4 rounded-md text-white font-medium">
                                    <span>
                                        Editar datos
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    editarUsuario && (
                        <ModalEditarUsuario />
                    )
                }
            </div>
        </>
    )
}

export { PerfilUsuario }