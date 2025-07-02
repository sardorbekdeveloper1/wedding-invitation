import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      contact: "Bog‘lanish",
      invitation: "Taklifnoma yaratish",
      language: "Til",
      uzbek: "O‘zbekcha",
      russian: "Русский",
      english: "English",
    },
  },
  ru: {
    translation: {
      home: "Главная",
      about: "О нас",
      contact: "Контакт",
      invitation: "Создать приглашение",
      language: "Язык",
      uzbek: "Узбекский",
      russian: "Русский",
      english: "Английский",
    },
  },
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      contact: "Contact",
      invitation: "Create Invitation",
      language: "Language",
      uzbek: "Uzbek",
      russian: "Russian",
      english: "English",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
