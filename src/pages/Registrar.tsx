import { FC, useRef } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Registrar: FC = () => {


    const auth = useAuth()

    const navigate = useNavigate()

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await auth.registerRequest()
            auth.setRegisterUserData({
                name: "",
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
            navigate("/")
        } catch (e: any) {
            alert(e)
        }
    }

    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center">
                <form onSubmit={handleRegister} className='w-1/4 space-y-5 text-center p-6 rounded-2xl border-zinc-700' style={{ boxShadow: '0px 0px 11px 0px rgba(0,0,0,0.1)' }}>
                    <h1 className='text-2xl text-zinc-700 font-bold'>Registrarse</h1>
                    <div>
                        <div>
                            <label className='font-semibold text-zinc-700'>Nombre Completo:</label>
                        </div>
                        <div>
                            <input
                                className="py-1 px-2 rounded-lg border bg-[#00000018] text-zinc-700 font-semibold w-3/4"
                                type="text"
                                placeholder="Nombre completo"
                                value={auth.registerUserData.name}
                                onChange={(e) => auth.setRegisterUserData({ ...auth.registerUserData, name: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='font-semibold text-zinc-700'>Usuario:</label>
                        </div>
                        <div>
                            <input
                                className="py-1 px-2 rounded-lg border bg-[#00000018] text-zinc-700 font-semibold w-3/4"
                                type="text"
                                placeholder="Usuario"
                                value={auth.registerUserData.username}
                                onChange={(e) => auth.setRegisterUserData({ ...auth.registerUserData, username: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='font-semibold text-zinc-700'>Correo electronico:</label>
                        </div>
                        <div>
                            <input
                                className="py-1 px-2 rounded-lg border bg-[#00000018] text-zinc-700 font-semibold w-3/4"
                                type="text"
                                placeholder="Correo electronico"
                                value={auth.registerUserData.email}
                                onChange={(e) => auth.setRegisterUserData({ ...auth.registerUserData, email: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='font-semibold text-zinc-700'>Contraseña:</label>
                        </div>
                        <div>
                            <input
                                className="py-1 px-2 rounded-lg border bg-[#00000018] text-zinc-700 font-semibold w-3/4"
                                type="password"
                                placeholder="Contraseña"
                                value={auth.registerUserData.password}
                                onChange={(e) => auth.setRegisterUserData({ ...auth.registerUserData, password: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='font-semibold text-zinc-700'>Confirmar Contraseña:</label>
                        </div>
                        <div>
                            <input
                                className="py-1 px-2 rounded-lg border bg-[#00000018] text-zinc-700 font-semibold w-3/4"
                                type="password"
                                placeholder="Confirmar contraseña"
                                value={auth.registerUserData.confirmPassword}
                                onChange={(e) => auth.setRegisterUserData({ ...auth.registerUserData, confirmPassword: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <Link to="/login" className='text-blue-400 text-sm underline'>¿Ya estas registrado?</Link>
                    </div>
                    <div>
                        <button className='px-4 py-2 rounded-lg bg-indigo-700 font-semibold' type='submit'>Registrase</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export { Registrar }