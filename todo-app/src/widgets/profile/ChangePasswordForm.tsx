import { useForm, type SubmitHandler } from "react-hook-form"
import FormField from "../../shared/ui/profile/content/form/FormField"
import type { ChangePasswordType } from "../../shared/types/user.types"
import { userService } from "../../services/user.service"
import { useTranslation } from "react-i18next"

type ChangePasswordFormType = {
    email: string | undefined,
    closeModal: () => void,
}

const ChangePasswordForm = ({email, closeModal}:ChangePasswordFormType) => {
    const {handleSubmit, register, formState: {errors}} = useForm<ChangePasswordType>()
    const {t} = useTranslation()
    const onSubmit: SubmitHandler<ChangePasswordType> = async (data) => {
        await userService.changePassword(String(email), data.oldPassword, data.newPassword)
        closeModal()
    }

    return <form onSubmit={handleSubmit(onSubmit)} className="">
        <FormField labelText="Old Password" name="oldPassword" inputElement={<input className="profile-form-input" type="password" {...register("oldPassword", {required: true})} />} />
        {errors.oldPassword ? <p>The field should be filled</p> : null}
        <FormField labelText="New Password" name="newPassword" inputElement={<input className="profile-form-input" type="password" {...register("newPassword", {required: true})}/>} />
        {errors.newPassword ? <p>The field should be filled</p> : null}
        <button type="submit" className="submit-form">{t("Change")}</button>
    </form>
}

export default ChangePasswordForm