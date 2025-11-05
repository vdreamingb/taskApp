import { useTranslation } from "react-i18next";

const AsideTitle = ({text}:{text:string}):React.JSX.Element => {
    const { t } = useTranslation();
    return <h2 className="aside-title">{t(text)}</h2>
}

export default AsideTitle