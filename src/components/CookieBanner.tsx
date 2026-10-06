import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const STORAGE_KEY = "soma-cookie-consent";
const OPEN_EVENT = "soma:open-cookie-settings";

declare global {
  interface Window {
    loadGoogleTags?: () => void;
  }
}

const readConsent = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const saveConsent = (value: "granted" | "denied") => {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage blocked — the choice just won't be remembered
  }
};

export const openCookieSettings = () => window.dispatchEvent(new Event(OPEN_EVENT));

const CookieBanner = () => {
  const { language } = useLanguage();
  const text = t(language).cookies;
  const [visible, setVisible] = useState(() => readConsent() === null);

  useEffect(() => {
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const accept = () => {
    saveConsent("granted");
    window.loadGoogleTags?.();
    setVisible(false);
  };

  const decline = () => {
    const wasGranted = readConsent() === "granted";
    saveConsent("denied");
    setVisible(false);
    // Tags already running on this page can't be unloaded, so reload to stop them
    if (wasGranted) window.location.reload();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={text.settings}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md z-50 p-5 shadow-lg border border-[#f7f2ec]/15"
      style={{ backgroundColor: "#525546" }}
    >
      <p className="font-sans text-sm leading-relaxed text-[#f7f2ec]/80 mb-4">{text.message}</p>
      <div className="flex gap-3 justify-end">
        <button
          onClick={decline}
          className="font-sans text-xs tracking-[0.2em] uppercase text-[#f7f2ec]/70 border border-[#f7f2ec]/20 px-5 py-2.5 hover:bg-[#f7f2ec]/10 hover:text-[#f7f2ec] transition-colors duration-200"
        >
          {text.decline}
        </button>
        <button
          onClick={accept}
          className="font-sans text-xs tracking-[0.2em] uppercase text-[#525546] bg-[#f7f2ec] border border-[#f7f2ec] px-5 py-2.5 hover:bg-[#f7f2ec]/85 transition-colors duration-200"
        >
          {text.accept}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
