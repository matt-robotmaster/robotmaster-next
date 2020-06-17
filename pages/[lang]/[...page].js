import React, { useEffect } from 'react';
import Head from 'next/head';
import { getInitialLocale } from '../../lib/translations/getInitialLocale';
import Router from "next/router";
import {isLocale} from "../../lib/translations/types";
import useTranslation from "../../utils/hooks/useTranslation";
import withLocale from "../../utils/hocs/withLocale";
import {getLatestPostData} from "../../lib/posts";
import {isPathExist} from "../../lib/utils";

const CatchAllPage = () => {
  const { locale } = useTranslation();

  //TODO: if the url hasn't got valid path then render not found

  if (typeof window !== 'undefined' && !isLocale(locale)) {
    //Router.push(`/${getInitialLocale()}`);
  }

  return (
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
  );
};

CatchAllPage.getInitialProps = async (ctx) => {

  if (!isLocale(ctx.query.lang) && isPathExist(`/[lang]/${ctx.query.lang}`)) {
    if (ctx.res) {
      const redirectTo = [`-`, ctx.query.lang, ctx.asPath.split('/').slice(2).join('/')].join('/');
      console.log(redirectTo);
      ctx.res.writeHead(302, { Location: redirectTo });
      ctx.res.end();
    }
  }

  return {};
};

export default withLocale(CatchAllPage);