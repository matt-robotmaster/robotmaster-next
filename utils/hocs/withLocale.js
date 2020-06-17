import React from 'react';
import { getDisplayName } from 'next/dist/next-server/lib/utils';
import { isLocale } from '../../lib/translations/types';
import { LocaleProvider } from '../context/LocaleContext';
import { getInitialLocale } from '../../lib/translations/getInitialLocale';

export default (WrappedPage) => {
  const WithLocale = ({ locale, ...pageProps }) => {
    return (
        <LocaleProvider lang={locale}>
          <WrappedPage {...pageProps} />
        </LocaleProvider>
    )
  };

  WithLocale.getInitialProps = async ctx => {
    if (isLocale(ctx.query.lang)) {
      let pageProps = {};
      if (WrappedPage.getInitialProps) {
        pageProps = await WrappedPage.getInitialProps(ctx);
      }
      if (typeof ctx.query.lang !== 'string' || !isLocale(ctx.query.lang)) {
        return { ...pageProps, locale: undefined };
      }
      return { ...pageProps, locale: ctx.query.lang };
    } else {
      if (ctx.res) {
        ctx.res.writeHead(302, { Location: `/${getInitialLocale()}/${ctx.query.lang}` });
        ctx.res.end();
      }
      return { };
    }
  };

  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};