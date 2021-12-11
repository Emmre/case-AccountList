import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TRANSLATIONS_TR } from "./tr/translations";
import { TRANSLATIONS_EN } from "./en/translations";

let getLocalItem = JSON.parse(localStorage.getItem("isLogin"));
let getLanguage = getLocalItem?.language;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: TRANSLATIONS_EN,
    },
    tr: {
      translation: TRANSLATIONS_TR,
    },
  },
});

i18n.changeLanguage(getLanguage || "tr");
