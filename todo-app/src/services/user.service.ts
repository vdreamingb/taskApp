import axios from "axios"

class UserSevice{
    async changePassword(email:string,oldPassword:string, newPassword: string){
        try {
            const token = localStorage.getItem("userAuth")
            return await axios.post("http://localhost:8010/api/auth/changePsw", {
                email,
                oldPassword,
                newPassword
            },
            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
        )
        } catch (error) {
            console.log(error)
        }
    }
}

export const userService = new UserSevice()