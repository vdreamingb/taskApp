import { createContext, useState, type Dispatch, type SetStateAction } from "react"
import { useMemo } from "react"

interface LangContext{
    language: string
    setLanguage: Dispatch<SetStateAction<string>>
}
const LanguageContext = createContext<LangContext>({} as LangContext)

const LanguageProvider = ({children}:{children: React.JSX.Element}):React.JSX.Element => {
    const [language, setLanguage] = useState<string>("ro")
    const value = useMemo(() =>({
        language,
        setLanguage
    }),[language])

    return <LanguageContext.Provider value={value}>
        {children}
    </LanguageContext.Provider>
}

export {LanguageContext, LanguageProvider}