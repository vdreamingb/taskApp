import axios from "axios"

class AuthService{
    async login(email:string, password:string){
        try {
            const response = await axios.post("http://localhost:8010/api/auth/login", {
                email: email,
                password: password
            })
            if(response.status == 200){
                const responseData = response.data
                localStorage.setItem("userAuth", responseData.message)
                localStorage.setItem("userId", responseData.data.id)
                return "Success"
            }
        } catch (error) {
            console.error(error)
        }
    }

    async register(username:string, email:string, password: string){
        try {
                const response = await axios.post("http://localhost:8010/api/auth/register",{
                name:username,
                email:email,
                password:password
            })
            if(response.status == 200){
                return await this.login(email, password)
            }
        } catch (error) {
            console.error(error)
        }
        
    }

    async whoAmI(){
        const token = localStorage.getItem("userAuth")
        const response = await axios.get("http://localhost:8010/api/auth/whoami", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const responseData = response.data
        const username = responseData.name
        const email = responseData.email
        const role = responseData.role

        return {
            username,
            email,
            role
        }
    }

    async logout(){
        localStorage.removeItem("userAuth")
        localStorage.removeItem("userId")
    }
}

export default AuthService