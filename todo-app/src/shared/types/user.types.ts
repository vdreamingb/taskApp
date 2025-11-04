export interface UserType{
    username: string
    email: string
    role: string
}

export interface ChangePasswordType{
    oldPassword: string,
    newPassword: string
}