import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { pb } from "../pb";
import { DataUser, LoginEntrar, RegisterUser } from "../Servicios";

interface AuthProviderProps {
    children: ReactNode;
}

type AuthType = {
    Authentication: boolean;
    userLogin: LoginEntrar;
    setUserLogin: React.Dispatch<React.SetStateAction<LoginEntrar>>;
    registerUserData: RegisterUser;
    setRegisterUserData: React.Dispatch<React.SetStateAction<RegisterUser>>;
    loginRequest: () => Promise<void>;
    registerRequest: () => Promise<void>
    logoutRequest: () => Promise<void>;
    getUserData: () => Promise<void>;
    userData: DataUser | null;
    setUserData: React.Dispatch<React.SetStateAction<DataUser | null>>;
    userToken: string;
    userID: any;
    usuarios: Array<DataUser>
    setUsuarios: React.Dispatch<React.SetStateAction<Array<DataUser>>>
}

export const AuthContext = createContext<AuthType>(
    {} as AuthType
);

export function AuthProvider({ children }: AuthProviderProps) {

    const Authentication = pb.authStore.isValid

    const userID = pb.authStore.model?.id
    const userToken = pb.authStore.token

    const [usuarios, setUsuarios] = useState<Array<DataUser>>([])

    const [userLogin, setUserLogin] = useState<LoginEntrar>({
        username: "",
        password: ""
    })

    const [registerUserData, setRegisterUserData] = useState<RegisterUser>({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [userData, setUserData] = useState<DataUser | null>(null);

    const loginRequest = async () => {
        await pb.collection('users').authWithPassword(
            userLogin.username,
            userLogin.password
        )
    };

    const verificationRequest = async (email: string) => {
        await pb.collection('users').requestVerification(email)
    }

    const registerRequest = async () => {
        const data = {
            name: registerUserData.name,
            username: registerUserData.username,
            email: registerUserData.email,
            password: registerUserData.password,
            passwordConfirm: registerUserData.confirmPassword
        };
        try {
            await pb.collection('users').create(data);
            try {
                verificationRequest(data.email)
            } catch (e) {
                alert("Erro no envio de verificação por e-mail.")
            }
        } catch (e) {
            alert("Erro no cadastro!");
        }
    }

    const logoutRequest = async () => {
        pb.authStore.clear()
        window.location.reload()
    }

    const getUserData = async () => {
        try {
            if (pb.authStore.model != null) {
                const authData = await pb.collection('users').getOne(userID)
                const userData: DataUser = {
                    id: authData.id,
                    username: authData.username,
                    email: authData.email,
                    name: authData.name,
                    avatar: `http://127.0.0.1:8090/api/files/_pb_users_auth_/${userID}/${authData.avatar}?${userToken}=`,
                    created: authData.created,
                    verified: authData.expand?.verified
                }
                setUserData(userData);
            }
        } catch (err) {
            setUserData(null);
        }
    }

    useEffect(() => {
        getUserData()
    }, [])


    return (
        <AuthContext.Provider value={{
            Authentication,
            userLogin,
            setUserLogin,
            registerUserData,
            setRegisterUserData,
            loginRequest,
            registerRequest,
            logoutRequest,
            getUserData,
            userData,
            setUserData,
            userToken,
            userID,
            setUsuarios,
            usuarios
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
