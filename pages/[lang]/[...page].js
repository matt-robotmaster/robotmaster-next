import React, { useEffect } from 'react';
import Head from 'next/head';
import { getInitialLocale } from '../../lib/translations/getInitialLocale';
import Router from "next/router";
import {isLocale} from "../../lib/translations/types";
import useTranslation from "../../utils/hooks/useTranslation";
import withLocale from "../../utils/hocs/withLocale";
import {isPathExist} from "../../lib/utils";
import Custom404 from "../404";

const CatchAllPage = () => {
  const { t, locale } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLocale(locale)) {
      Router.replace(`/${getInitialLocale()}${Router.asPath}`);
    }
  });

  return (
      <React.Fragment>
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <Custom404/>
      </React.Fragment>
  );
};

CatchAllPage.getInitialProps = async (ctx) => {

  if (!isLocale(ctx.query.lang) && isPathExist(`/[lang]${ctx.asPath}`)) {
    if (ctx.res) {
      const redirectTo = [`/-`, ctx.query.lang, ctx.asPath.split('/').slice(2).join('/')].join('/');
      ctx.res.writeHead(302, { Location: redirectTo });
      ctx.res.end();
    }
  }

  return {};
};

export default withLocale(CatchAllPage);