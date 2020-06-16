import React from 'react';
import Custom404 from "../../pages/404";
import { getDisplayName } from 'next/dist/next-server/lib/utils';
import { isLocale } from '../../lib/translations/types';
import { LocaleProvider } from '../context/LocaleContext';

export default (WrappedPage) => {
  const WithLocale = ({ locale, ...pageProps }) => {
    if (!locale) {
      return <Custom404/>
    }
    return (
        <LocaleProvider lang={locale}>
          <WrappedPage {...pageProps} />
        </LocaleProvider>
    )
  };

  WithLocale.getInitialProps = async ctx => {
    let pageProps = {};
    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx);
    }
    if (typeof ctx.query.lang !== 'string' || !isLocale(ctx.query.lang)) {
      return { ...pageProps, locale: undefined };
    }
    return { ...pageProps, locale: ctx.query.lang };
  };

  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};