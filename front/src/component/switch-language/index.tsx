import React from 'react'
import SwitchTheme from '../SwitchTheme';
interface LanguageProps {
    language: string;
    setLanguage: (language: string) => void;
    swithTheme: boolean;
}

const SwitchLanguage: React.FC<LanguageProps> = ({language, setLanguage , swithTheme}) => {
  return (
    <div>
            <button
              id="ua"
              style={
                language === "ua"
                  ? {
                      backgroundColor: "#E9FBEF",
                      color: "#1ED760",
                    }
                  : {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      color: swithTheme ? "#000000" : "#ffffff",
                    }
              }
              onClick={() => setLanguage("ua")}
            >
              UA
            </button>
            <button
              id="en"
              style={
                language === "en"
                  ? {
                      backgroundColor: "#E9FBEF",
                      color: "#1ED760",
                    }
                  : {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      color: swithTheme ? "#000000" : "#ffffff",
                    }
              }
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
  )
}

export default SwitchLanguage