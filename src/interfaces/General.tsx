export interface DataUser {
    id: string
    created: string;
    verified: boolean
    username: string;
    email: string;
    name: string;
    avatar?: string;
}
export interface LoginEntrar {
    username: string;
    password: string;
}
export interface RegisterUser {
    name: string
    username: string,
    email: string,
    password: string
    confirmPassword: string
}