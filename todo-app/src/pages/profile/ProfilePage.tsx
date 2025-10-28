import PageLayout from "./PageLayout"
import type { UserType } from "../../shared/types/user.types"
import { useEffect, useState } from "react"
import AuthService from "../../services/auth.service"


const Content = ():React.JSX.Element => {
    const userService = new AuthService()
    const [userData,setUserData] = useState<UserType | null>(null)

    useEffect(()=>{
        async function getData(){
            const data = await userService.whoAmI()
            setUserData(data)
        }
        getData()
    },[])

    return <>
        <div className="tasks-app__header">
            <h3 className="profile-title">
                Profile
            </h3>
            <button className="change-password">
                Change password
            </button>
            <button className="delete-account">
                Delete account
            </button>
        </div>
        <div className="profile-settings__content">
            <div className="user-info">
                <div className="user-avatar">   
                    <img src="/assets/user.svg" alt="User" />
                </div>
                <div className="user-detailed__info">
                    <div className="detailed-info__item">
                        Username: {userData?.username}
                    </div>
                    <div className="detailed-info__item">
                        Email: {userData?.email}
                    </div>
                </div>
                
            </div>
        </div>
        
    </>
}

const ProfilePage = ():React.JSX.Element => {
    return <PageLayout content={<Content username="Admin" email="testUser@mail.ru"/>} />
}

export default ProfilePage