import { FC } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

const Login: FC = () => {

    const auth = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await auth.loginRequest()
            window.location.reload()
        }
        catch (e: any) {
            alert(e.message)
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit} className='flex justify-center'>
                <div className=' w-1/6 space-y-4 text-center p-6 rounded-2xl border-zinc-700' style={{ boxShadow: '0px 0px 11px 0px rgba(0,0,0,0.1)' }}>
                    <h1 className='text-2xl text-zinc-700 font-bold'>Entrar</h1>
                    <div>
                        <div>
                            <label className='font-semibold text-zinc-700'>Usuario:</label>
                        </div>
                        <div>
                            <input
                                className="py-1 px-2 rounded-lg border bg-[#00000018] text-zinc-700 font-semibold"
                                type="text"
                                placeholder="Ingrese su usuario"
                                value={auth.userLogin.username}
                                onChange={(e) => auth.setUserLogin({ ...auth.userLogin, username: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='font-semibold text-zinc-700'>Contraseña:</label>
                        </div>
                        <div>
                            <input
                                className="py-1 px-2 rounded-lg border bg-[#00000018] text-zinc-700 font-semibold"
                                type="password"
                                placeholder="Ingrese su contraseña"
                                value={auth.userLogin.password}
                                onChange={(e) => auth.setUserLogin({ ...auth.userLogin, password: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <Link to="/registrar" className='text-blue-400 text-sm underline'>¿No estas registrado?</Link>
                    </div>
                    <div>
                        <button className='px-4 py-2 rounded-lg bg-indigo-700 font-semibold' type='submit'>Inciar Sesión</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export { Login }