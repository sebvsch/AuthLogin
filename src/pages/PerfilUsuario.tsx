import { FC, useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { pb } from "../pb";
import { DataUser } from "../Servicios";

const PerfilUsuario: FC = () => {

    const auth = useAuth()

    const [editarDatosUsuario, setEditarDatosUsuario] = useState<DataUser | null>(null)

    const editarUsuario = (usuario: DataUser) => {
        setEditarDatosUsuario(usuario)
    }

    const guardarUsuarioEditado = async () => {
        if (editarDatosUsuario !== null) {
            if (!editarDatosUsuario.name || !editarDatosUsuario.username || !editarDatosUsuario.email) {
                alert("Por favor, complete todos los campos")
                return;
            }
            await pb.collection('users').update(editarDatosUsuario.id, editarDatosUsuario)
            setEditarDatosUsuario(null)
        }
    }

    return (
        <>
            <div className="p-3">
                <div>
                    <div className="border border-white/60 p-9 rounded-2xl" style={{ boxShadow: '0px 0px 11px 0px rgba(0,0,0,0.1)' }}>
                        <div className="h-28 w-28">
                            <img className="rounded-full border border-white/60 shadow-lg" src={auth.userData?.avatar} alt="Foto de Perfil" />
                        </div>
                        <div className="text-sm  space-y-1 mt-2">
                            <div>
                                <label className="text-gray-900">Nombre: </label>
                                {editarDatosUsuario !== null &&
                                    editarDatosUsuario.id === auth.userData?.id ? (
                                    <input
                                        type="text"
                                        value={editarDatosUsuario.name}
                                        onChange={(e) => setEditarDatosUsuario({ ...editarDatosUsuario, name: e.target.value })}
                                        required={true}
                                    />
                                ) : (
                                    <span className="text-gray-900 font-semibold">{auth.userData?.name}</span>
                                )}
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
                                {editarDatosUsuario !== null &&
                                    editarDatosUsuario.id === auth.userData?.id ? (
                                    <button onClick={guardarUsuarioEditado} className="bg-slate-400 py-1 px-4 rounded-md text-gray-900 font-medium">Guardar cambios</button>
                                ) : (
                                    <button onClick={() => editarUsuario(auth.userData)} className="bg-slate-400 py-1 px-4 rounded-md text-gray-900 font-medium">Editar datos</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { PerfilUsuario }