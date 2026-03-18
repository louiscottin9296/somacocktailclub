import { createContext, useContext, ReactNode, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Language = "en" | "de" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const hasAutoDetected = useRef(false);

  const language: Language = location.pathname.startsWith("/de")
    ? "de"
    : location.pathname.startsWith("/fr")
      ? "fr"
      : "en";

  const setLanguage = (lang: Language) => {
    if (lang === "de") {
      navigate("/de");
    } else if (lang === "fr") {
      navigate("/fr");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    // Only auto-detect if user is on root "/" and hasn't manually navigated to /de
    if (hasAutoDetected.current || location.pathname !== "/") return;
    hasAutoDetected.current = true;

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code === "DE") {
          navigate("/de", { replace: true });
        } else if (data?.country_code === "FR") {
          navigate("/fr", { replace: true });
        }
      })
      .catch(() => {
        // Silently fail — default to English
      });
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
