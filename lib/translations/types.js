import { locales } from './config';

//TODO: refactor: move to config

export function isLocale(_locale) {
  return locales.some(locale => locale === _locale);
}