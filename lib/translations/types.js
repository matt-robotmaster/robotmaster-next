import { locales } from './config';

export function isLocale(_locale) {
  return locales.some(locale => locale === _locale);
}