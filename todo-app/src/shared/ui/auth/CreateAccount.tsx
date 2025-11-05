import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const CreateAccount = ():React.JSX.Element => {
    const { t } = useTranslation();
    return <Link to="/sign-up" className="create-account">{t("Don't have an account?")}</Link>
}

export default CreateAccount