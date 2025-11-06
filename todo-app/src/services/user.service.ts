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

    async deleteAccount(){
        try {
            const token = localStorage.getItem("userAuth")
            const response = await axios.delete("http://localhost:8010/api/auth/delete", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if(response.status === 200){
                localStorage.removeItem("userAuth")
                localStorage.removeItem("userId")
            }
        } catch (error) {
            console.error(error)
        }
    }
}

export const userService = new UserSevice()