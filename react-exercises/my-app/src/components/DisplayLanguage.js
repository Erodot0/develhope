import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Languages = {
    en: {
        CURRENT_LANGAUGE: "English"
    },
    it: {
        CURRENT_LANGAUGE: "Italiano"
    }
}

export function DisplayLanguage() {
    const language = useContext(LanguageContext)

    return(
        <div>
            <h1>Selected Language is: {Languages[language].CURRENT_LANGAUGE}</h1>
        </div>
    )
}


