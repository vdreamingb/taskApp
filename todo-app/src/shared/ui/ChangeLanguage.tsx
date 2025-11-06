import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = ():React.JSX.Element => {
    const [language, setLanguage] = useState<string>("ro")
    const { i18n } = useTranslation()
    const [isActive, setIsActive] = useState<boolean>(false)

    function changeLanguage(lng:string){
        i18n.changeLanguage(lng);
        setLanguage(lng)
        setIsActive(false)
    }

    const optionsRef = useRef<HTMLDivElement| null>(null)

    function onClick(){
        setIsActive(isActive => !isActive)
    }

    return <div className={"change-lng"+`${isActive?" active":""}`}>
        <div ref={optionsRef} className={"options"+`${isActive?" active":""}`}>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("ro")}>Română</button>
        </div>
        <button className="change-lng__button" onClick={onClick}>
            {language}
        </button>
        
        
    </div>
}

export default ChangeLanguage