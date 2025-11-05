import { useTranslation } from "react-i18next";

type ProgressRadioType = {
    type: string
    inputElement: React.JSX.Element
}

const ProgressRadio = ({type, inputElement}:ProgressRadioType):React.JSX.Element => {
    const { t } = useTranslation();
    return <div className="progress-radio">
        <label id={type} htmlFor={type} className="progress-radio__label">{t(type==="not-done"?"Not done": type==="in-process"?"In process":"Done")}</label>
        {inputElement}
    </div>
}

export default ProgressRadio