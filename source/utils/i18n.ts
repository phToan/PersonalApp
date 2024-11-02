import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../language/en.json';
import vi from '../language/vn.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,

  resources: {
    en: {translation: en},
    vi: {translation: vi},
  },

  interpolation: {
    escapeValue: false,
  },
  lng: 'vi',
  compatibilityJSON: 'v3',
});

export default i18n;
