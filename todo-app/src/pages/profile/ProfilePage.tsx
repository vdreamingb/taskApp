import PageLayout from "./PageLayout"
import type { UserType } from "../../shared/types/user.types"
import { useEffect, useState } from "react"
import AuthService from "../../services/auth.service"
import CustomModal from "../../shared/ui/CustomModal"
import useModal from "../../shared/custom-hooks/useModal"
import ChangePasswordForm from "../../widgets/profile/ChangePasswordForm"
import { useTranslation } from "react-i18next"
import { userService } from "../../services/user.service"
import { useNavigate } from "react-router-dom"

const Content = ():React.JSX.Element => {
    const authService = new AuthService()
    const [userData,setUserData] = useState<UserType | null>(null)
    const modalProperties = useModal()
    const {t} = useTranslation()
    const navigate = useNavigate()

    useEffect(()=>{
        async function getData(){
            const data = await authService.whoAmI()
            setUserData(data)
        }
        getData()
    },[])

    async function onClick(){
        await userService.deleteAccount()
        navigate("/")
    }

    return <>
        <div className="tasks-app__header">
            <h3 className="profile-title">
                {t("Profile")}
            </h3>
            <button onClick={modalProperties.openModal} className="change-password">
                {t("Change password")}
            </button>
            <button onClick={onClick} className="delete-button">
                {t("Delete account")}
            </button>
        </div>
        <div className="profile-settings__content">
            <div className="user-info">
                <div className="user-avatar">   
                    <img src="/assets/user.svg" alt="User" />
                </div>
                <div className="user-detailed__info">
                    <div className="detailed-info__item">
                        {t("Username")}: {userData?.username}
                    </div>
                    <div className="detailed-info__item">
                        {t("Email")}: {userData?.email}
                    </div>
                </div>
                
            </div>
        </div>
        <CustomModal title="Change Password" form={<ChangePasswordForm email={userData?.email} closeModal={modalProperties.closeModal} />} closeModal={modalProperties.closeModal} modalIsOpen={modalProperties.modalIsOpen} />
    </>
}

const ProfilePage = ():React.JSX.Element => {
    return <PageLayout content={<Content />} />
}

export default ProfilePage