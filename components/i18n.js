import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('../public/en.json'),
      },
      gr: {
        translation: require('../public/gr.json'),
      },
    },
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language
    debug: true, // Enable debugging
  });

export default i18n;
