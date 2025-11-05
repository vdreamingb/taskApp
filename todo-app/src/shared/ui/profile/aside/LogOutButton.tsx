import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";

const LogOutButton = ():React.JSX.Element => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    function onClick(){
        localStorage.removeItem("userAuth")
        navigate("/")
    }

    return <button onClick={onClick} className="log-out__button profile-button">
        {t("Log out")} <img src="/assets/arrow.svg" alt="Arrow" />
    </button>
}

export default LogOutButton