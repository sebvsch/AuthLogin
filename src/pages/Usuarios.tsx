import { FC, useEffect, useState } from 'react'
import { pb } from '../pb'
import { DataUser } from '../Servicios'

const Usuarios: FC = () => {

    const [usuarios, setUsuarios] = useState<Array<DataUser>>([])

    const consultarListaUsuarios = async () => {
        try {
            const respuesta = await pb.collection('users').getFullList<DataUser>(undefined, { sort: '-created' });
            console.log(respuesta);
            setUsuarios(respuesta);
        } catch (error) {
            console.error('Error al consultar usuarios:', error);
        }
    }

    useEffect(() => {
        pb.collection('users').subscribe<DataUser>('*', (e) => {
            if (e.action === 'create') {
                setUsuarios((prevUsu) => [...prevUsu, e.record])
            }
            if (e.action === 'delete') {
                const borrarUsuario = e.record.id;
                setUsuarios((prevUsu) => prevUsu.filter(i => i.id !== borrarUsuario));
            }
            if (e.action === 'update') {
                setUsuarios((prevUsu) => prevUsu.map((i) => (i.id === e.record.id ? e.record : i)));
            }
        });

        return () => {
            pb.realtime.unsubscribe(); // don't forget to unsubscribe
        };
    }, [])

    useEffect(() => {
        consultarListaUsuarios()
    }, [])

    return (
        <>
            <div className="p-3">
                <h1 className="text-gray-900 text-lg font-bold mb-4">Usuarios</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className='text-gray-400 text-xs'>
                            <tr>
                                <th className="py-2 px-4 border-dashed border-b">FECHA CREACIÓN</th>
                                <th className="py-2 px-4 border-dashed border-b">NOMBRE</th>
                                <th className="py-2 px-4 border-dashed border-b">USUARIO</th>
                                <th className="py-2 px-4 border-dashed border-b">CORREO</th>
                                <th className="py-2 px-4 border-dashed border-b">VERIFICADO</th>
                                <th className="py-2 px-4 border-dashed border-b"></th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-400 text-xs'>
                            {usuarios && usuarios.length > 0 ? (
                                usuarios.map((usuario) => (
                                    <tr key={usuario.id}>
                                        <td className="py-2 px-4 font-semibold">{usuario.created.slice(0, 10)}</td>
                                        <td className="py-2 px-4">{usuario.name}</td>
                                        <td className="py-2 px-4">{usuario.username}</td>
                                        <td className="py-2 px-4">{usuario.email}</td>
                                        <td className='py-2 px-4 text-center text-[10px]'>
                                            <span className={usuario.verified ? "bg-green-200 text-green-400 py-1 px-2 rounded-md font-bold" : "bg-red-200 text-red-400 py-1 px-2 rounded-md font-bold"}>
                                                {usuario.verified ? "Verificado" : "Sin verificar"}
                                            </span>
                                        </td>
                                        <td className="py-2 px-4">
                                            <button className='text-xs font-semibold bg-gray-200 text-gray-400 py-1 px-3 rounded-lg hover:bg-gray-300 hover:text-gray-500 ease-in duration-200'>
                                                Acciones <span className="align-middle text-base material-symbols-outlined">expand_more</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="py-2 px-4 text-center font-bold">
                                        No hay usuarios disponibles.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export { Usuarios }