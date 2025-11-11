import { useForm } from "react-hook-form"
import type { Auth } from "../../shared/types/auth.types"
import type { SubmitHandler } from "react-hook-form"
import FormTitle from "../../shared/ui/auth/FormTitle"
import type { FormType } from "../../shared/types/auth.types"
import CreateAccount from "../../shared/ui/auth/CreateAccount"
import AuthService from "../../services/auth.service"
import useGetRedirect from "../../shared/custom-hooks/useGetRedirect"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

const AuthForm = ({type}:FormType):React.JSX.Element => {
    const { t } = useTranslation();
    useGetRedirect()
    const {register, handleSubmit, formState: {errors}} = useForm<Auth>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Auth> = async (data) => {
        const authService = new AuthService()
        if(type === "log-in"){
            const response = await authService.login(data.email, data.password)
            if(response === "Success"){
                navigate("/profile")
            }
        }
        if(type==="sign-up"){
            const response = await authService.register(data.username, data.email, data.password)
            if(response === "Success"){
                navigate("/profile")
            }
        }
    }

    return <div className="auth-content">
        <FormTitle type={type} />
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder={t("Email")} className="form-input" {...register("email", {required:true, minLength: 3})} />
            {type==="sign-up"?errors.username && <p className="input-alert">Username is required and must constain at least 3 letters.</p>: ""}
            {type==="sign-up"&&(<input placeholder={t("Username")} {...register("username", {required: true, minLength: 3})} className="form-input" />)}
            <input placeholder={t("Password")} type="password" {...register("password", {required: true, minLength:6, pattern:/^(?=.*[A-Z])(?=.*\d).+$/})} className="form-input"/>
            {type==="sign-up"?errors.password && <p className="input-alert">Password must contain at least one big letter one number and more than 6 characters</p>: ""}
            <button className="auth" type="submit">{type==="log-in"?t("Log in"): t("Sign up")}</button>
        </form>
        {type==="log-in"? <CreateAccount />: ""}
    </div>
     
}

export default AuthForm