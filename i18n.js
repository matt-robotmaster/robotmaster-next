const NextI18Next = require('next-i18next').default;

exports.NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de']
});