import type { FormFieldType } from "../../../../types/task.types"
import { useTranslation } from "react-i18next";

const FormField = ({labelText, inputElement, name}:FormFieldType) => {
    const { t } = useTranslation();
    return <div className="form-field">
        <label htmlFor={name} className="form-field__label">{t(labelText)}</label>
        {inputElement}
    </div>
}

export default FormField