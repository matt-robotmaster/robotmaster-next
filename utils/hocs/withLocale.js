import React, {useEffect} from 'react';
import Custom404 from "../../pages/404";
import { getDisplayName } from 'next/dist/next-server/lib/utils';
import { isLocale } from '../../lib/translations/types';
import { LocaleProvider } from '../context/LocaleContext';
import { getInitialLocale } from '../../lib/translations/getInitialLocale';
import Router from "next/router";

export default (WrappedPage) => {
  const WithLocale = ({ locale, ...pageProps }) => {
    let initialLocale = locale;
    useEffect(() => {
      if (!locale) {
        initialLocale = getInitialLocale();
        Router.push(`/${initialLocale}${Router.asPath}`);
      }
    });

    return (
        <LocaleProvider lang={initialLocale}>
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