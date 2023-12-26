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
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>User</label>
                <input
                    className="bg-slate-300"
                    type="text"
                    value={dataLogin.username}
                    onChange={(e) => setDataLogin({ ...dataLogin, username: e.target.value })}
                />
                <label>Pass</label>
                <input
                    className="bg-slate-300"
                    type="password"
                    value={dataLogin.password}
                    onChange={(e) => setDataLogin({ ...dataLogin, password: e.target.value })}
                />

                <button type='submit'>Entrar</button>
            </form>
        </>
    )
}

export { Login }