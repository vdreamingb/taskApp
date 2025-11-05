import type { FormType } from "../../types/auth.types"
import { useTranslation } from "react-i18next";

const FormTitle = ({type}: FormType) => {
    const { t } = useTranslation();
    return <h1 className="form-title">{type==="log-in"?t("Log in"):t("Sign up")}</h1>
}

export default FormTitle