import { FC, useEffect, useState } from "react";
import { pb } from "../pb";
import { DataUser } from "../Servicios";
import { useAuth } from "../auth/AuthProvider";

const Dashboard: FC = () => {

    const auth = useAuth()

    const [userData, setUserData] = useState<DataUser | null>(null);

    const getUserData = async () => {
        try {
            const authData = pb.authStore.model
            if (!authData) throw new Error("No se ha autenticado")
            const userData: DataUser = {
                id: authData.id,
                username: authData.username,
                email: authData.email,
                name: authData.name,
                avatar: authData.avatar
            }

            setUserData(userData);
        } catch (err) {
            console.log(err);
            setUserData(null);
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    const handleLogout = async () => {
        await auth.logoutRequest()
    }

    return (
        <>
            <h1>Dashboard</h1>
            <div>
                <div>
                    <img src={userData?.avatar} />
                </div>
                <div>
                    {userData?.name}
                </div>
            </div>
            <div>
                <button className='px-4 py-2 rounded-lg bg-blue-900 font-semibold' type='submit' onClick={handleLogout}>Cerrar Sesión</button>
            </div>
        </>
    )
}

export { Dashboard }