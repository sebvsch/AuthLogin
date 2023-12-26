import { ReactNode, createContext, useContext, useState } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

type AuthType = {
    isAuthenticated: boolean
}

export const AuthContext = createContext<AuthType>(
    {} as AuthType
);

export function AuthProvider({ children }: AuthProviderProps) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)


    return (
        <AuthContext.Provider value={{
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
