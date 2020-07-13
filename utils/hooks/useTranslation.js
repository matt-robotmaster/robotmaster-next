import { useContext } from 'react'
import { LocaleContext } from '../context/LocaleContext'
import strings from '../../lib/translations/strings'
import { defaultLocale } from '../../lib/translations/config'

export default function useTranslation() {
  const { locale } = useContext(LocaleContext);

  function t(key) {
    if (locale && !strings[locale]) {
      console.warn(`No translations found for locale: '${locale}'.`);
    } else if (locale && !strings[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }

    return (strings[locale] && strings[locale][key]) ? strings[locale][key] : (strings[defaultLocale][key] || '');
  }

  return {
    t,
    locale
  };
}
