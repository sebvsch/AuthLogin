import { FC } from "react";
import { useAuth } from "../auth/AuthProvider";
import { pb } from "../pb";

const PerfilUsuario: FC = () => {

    const auth = useAuth()

    const verificarUsuario = async () => {
        if (auth.userData != null) {
            await pb.collection('users').requestVerification(auth.userData.email);
        }
    }


    return (
        <>
            <div>
                <div className="h-28 w-28">
                    <img className="rounded-full" src={auth.userData?.avatar} alt="Foto de Perfil" />
                </div>
                <div className="text-sm">
                    <div>
                        <label className="text-gray-900">Nombre:</label>
                        <span className="text-gray-900 font-semibold">{auth.userData?.name}</span>
                    </div>
                    <div>
                        <label className="text-gray-900">Usuario:</label>
                        <span className="text-gray-900 font-semibold">{auth.userData?.username}</span>
                    </div>
                    <div>
                        <label className="text-gray-900">Email:</label>
                        <span className="text-gray-900 font-semibold">{auth.userData?.email}</span>
                    </div>
                    <div>
                        <button onClick={verificarUsuario} className="bg-slate-400 py-1 px-4 rounded-md text-gray-900 font-medium">Verificar Usuario</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export { PerfilUsuario }