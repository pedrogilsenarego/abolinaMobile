import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { content } from "./languages";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  debug: false,
  interpolation: {
    escapeValue: false,
  },

  fallbackLng: "pt",

  resources: content,
});

export { i18n };
