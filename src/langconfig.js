import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
    lng: "",
    resources: {
        en: {
            translation: {
                Hi: "Hi",
                Actions: "Actions"
            }
        },
        vi: {
            translation: {
                Hi: "Chào",
                Actions: "Hành động"
            }

        }
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
});

export default i18n;
