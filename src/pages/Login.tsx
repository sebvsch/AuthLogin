import { FC, useState } from 'react'
import { LoginEntrar } from '../Servicios';
import { pb } from '../pb';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

const Login: FC = () => {
    const [dataLogin, setDataLogin] = useState<LoginEntrar>({
        username: "",
        password: ""
    });

    const auth = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await pb.collection('users').authWithPassword(
                dataLogin.username,
                dataLogin.password
            );
            auth.setIsAuthenticated(true)
            navigate("/dashboard")
        }
        catch (e) {
            alert(e)
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit} className='flex justify-center'>
                <div className='border w-1/6 space-y-4 text-center p-6 rounded-2xl border-zinc-700'>
                    <h1 className='text-2xl text-zinc-400 font-bold'>Login</h1>
                    <div>
                        <div>
                            <label className='font-semibold text-zinc-400'>Username:</label>
                        </div>
                        <div>
                            <input
                                className="py-1 px-2 rounded-lg border bg-[#333333] border-zinc-600"
                                type="text"
                                value={dataLogin.username}
                                onChange={(e) => setDataLogin({ ...dataLogin, username: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='font-semibold text-zinc-400'>Contraseña:</label>
                        </div>
                        <div>
                            <input
                                className="py-1 px-2 rounded-lg border bg-[#333333] border-zinc-600"
                                type="password"
                                value={dataLogin.password}
                                onChange={(e) => setDataLogin({ ...dataLogin, password: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <button className='px-4 py-2 rounded-lg bg-blue-900 font-semibold' type='submit'>Inciar Sesión</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export { Login }