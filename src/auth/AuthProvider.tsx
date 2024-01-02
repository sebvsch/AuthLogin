import { ReactNode, createContext, useContext, useState } from "react";
import { pb } from "../pb";
import { LoginEntrar, RegisterUser } from "../Servicios";

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
}

export const AuthContext = createContext<AuthType>(
    {} as AuthType
);

export function AuthProvider({ children }: AuthProviderProps) {

    const Authentication = pb.authStore.isValid

    const [userLogin, setUserLogin] = useState<LoginEntrar>({
        username: "",
        password: ""
    })

    const [registerUserData, setRegisterUserData] = useState<RegisterUser>({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const loginRequest = async () => {
        await pb.collection('users').authWithPassword(
            userLogin.username,
            userLogin.password
        )
    };

    const registerRequest = async () => {
        const data = {
            "name": registerUserData.name,
            "username": registerUserData.username,
            "email": registerUserData.email,
            "password": registerUserData.password,
            "passwordConfirm": registerUserData.confirmPassword
        };
        await pb.collection('users').create(data);
    }

    const logoutRequest = async () => {
        pb.authStore.clear()
        window.location.reload()
    }


    return (
        <AuthContext.Provider value={{
            Authentication,
            userLogin,
            setUserLogin,
            registerUserData,
            setRegisterUserData,
            loginRequest,
            registerRequest,
            logoutRequest
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
